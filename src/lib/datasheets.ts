/** SourceKart ships COA / Halal / Kosher documentation per lot; no datasheet pages. */

export type Datasheet = {
  slug: string;
  name: string;
};

export const datasheetList: Datasheet[] = [];

export function datasheetsForFamily(_slug: string): Datasheet[] {
  return [];
}
