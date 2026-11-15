import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { contributions, profile, projects } from "@/content/site";

const inPublic = (path: string) => join(process.cwd(), "public", path);

describe("proje içeriği", () => {
  it("slug'lar benzersiz", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it.each(projects.map((project) => [project.title, project] as const))("%s kartı eksiksiz", (_title, project) => {
    expect(existsSync(inPublic(project.image)), `${project.image} yok`).toBe(true);
    expect(project.source).toMatch(/^https:\/\/github\.com\/ahmetkurtbm\/[\w-]+$/);
    if (project.demo) expect(project.demo).toMatch(/^https:\/\//);
    expect(project.problem.length).toBeGreaterThan(0);
    expect(project.tags.length).toBeGreaterThan(0);
  });
});

describe("profil", () => {
  it("CV dosyası sitede var", () => {
    expect(existsSync(inPublic(profile.cv))).toBe(true);
  });
});

describe("açık kaynak katkıları", () => {
  it.each(contributions.map((item) => [item.title, item] as const))("%s kaydı eksiksiz", (_title, item) => {
    expect(item.url).toMatch(/^https:\/\/github\.com\/[\w.-]+\/[\w.-]+\/(pull|issues)\/\d+$/);
    expect(item.repo).toMatch(/^[\w.-]+\/[\w.-]+$/);
    expect(item.summary.length).toBeGreaterThan(0);
  });
});
