"use client";

import { useEffect, useRef } from "react";

/*
 * Andy Sloane'in donut.c'sinin tarayıcı sürümü: bir simidin (torus) yüzeyindeki
 * noktalar iki eksende döndürülür, ekrana izdüşürülür ve ışığa göre parlaklığı
 * ".,-~:;=!*#$@" karakterlerinden biriyle çizilir. z-tamponu hangi noktanın
 * önde kaldığını belirler. Hepsi tek bir <pre> içinde düz metin.
 */

const COLS = 80;
const ROWS = 40;
// donut.c'deki K1: simit ızgarayı dolduracak kadar büyük izdüşürülür (karakterler ~2:1 yüksek).
const SCALE_X = 50;
const SCALE_Y = 25;
const SHADES = ".,-~:;=!*#$@";

function frame(a: number, b: number) {
  const output = new Array<string>(COLS * ROWS).fill(" ");
  const depth = new Float32Array(COLS * ROWS);
  const [sinA, cosA, sinB, cosB] = [Math.sin(a), Math.cos(a), Math.sin(b), Math.cos(b)];

  for (let theta = 0; theta < 6.28; theta += 0.07) {
    const [sinT, cosT] = [Math.sin(theta), Math.cos(theta)];
    for (let phi = 0; phi < 6.28; phi += 0.02) {
      const [sinP, cosP] = [Math.sin(phi), Math.cos(phi)];
      const circle = cosT + 2; // simidin kesit çemberi (R2=2, R1=1)
      const inverseZ = 1 / (sinP * circle * sinA + sinT * cosA + 5);
      const t = sinP * circle * cosA - sinT * sinA;
      const x = Math.floor(COLS / 2 + SCALE_X * inverseZ * (cosP * circle * cosB - t * sinB));
      const y = Math.floor(ROWS / 2 + SCALE_Y * inverseZ * (cosP * circle * sinB + t * cosB));
      const index = x + COLS * y;
      const light = Math.floor(8 * ((sinT * sinA - sinP * cosT * cosA) * cosB - sinP * cosT * sinA - sinT * cosA - cosP * cosT * sinB));
      if (y >= 0 && y < ROWS && x >= 0 && x < COLS && inverseZ > depth[index]) {
        depth[index] = inverseZ;
        output[index] = SHADES[Math.max(0, light)];
      }
    }
  }

  let text = "";
  for (let row = 0; row < ROWS; row++) text += output.slice(row * COLS, (row + 1) * COLS).join("") + "\n";
  return text;
}

export function AsciiDonut({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLPreElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let a = 1;
    let b = 1;
    element.textContent = frame(a, b);

    // Hareket azaltma tercihi varsa simit sabit bir karede durur.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    let last = 0;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => (visible = entry.isIntersecting));
    observer.observe(element);

    const tick = (time: number) => {
      raf = requestAnimationFrame(tick);
      // Saniyede ~30 kare yeterli; görünmüyorken hiç hesaplanmaz.
      if (!visible || time - last < 33) return;
      last = time;
      a += 0.04;
      b += 0.02;
      element.textContent = frame(a, b);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return <pre ref={ref} aria-hidden className={`ascii-donut ${className}`} />;
}
