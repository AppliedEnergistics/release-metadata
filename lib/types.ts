import PersistentCache from "./PersistentCache.js";

export type CachedGithubRelease = {
  /**
   * When this release was published.
   */
  published?: string;
  /**
   * Name of the Git tag backing this release.
   */
  tagName: string;
  /**
   * URL for linking a user to this release.
   */
  url: string;
  /**
   * Markdown code of the changelog.
   */
  changelog?: string;
  /**
   * Mod version extracted from the release.
   */
  version?: string;
  /**
   * Minecraft versions supported by this release.
   */
  minecraftVersions?: string[];
  /**
   * Mod-Loaders supported by this release.
   */
  modLoaders?: ModLoader[];
  /**
   * Files attached to the release.
   */
  assets: Partial<Record<ReleaseAssetType, CachedGithubAsset>>;
};

export type CachedGithubAsset = {
  filename: string;
  size: number;
  url: string;
  browser_download_url: string;
};

export type GithubReleaseCache = PersistentCache<CachedGithubRelease>;

export enum ModLoader {
  NEOFORGE = "neoforge",
  FORGE = "forge",
  FABRIC = "fabric",
}

export type ModReleaseInfo = {
  /**
   * Git tag for the source.
   */
  tagName: string;
  /**
   * The version number of the mod. May have -beta or -alpha suffixes.
   */
  modVersion: string;
  /**
   * Minecraft versions supported by this release.
   */
  minecraftVersions: string[];
  /**
   * Modloader supported by this release.
   */
  modLoaders: ModLoader[];
};

export enum ReleaseAssetType {
  MOD = "mod",
  API = "api",
  JAVADOC = "javadoc",
  /**
   * Version of the mod that has not been remapped to the production namespace.
   * Used in older versions of Forge for running in the dev-environment of addons.
   */
  UNOBF = "unobf",
  /**
   * Assets for the online-version of the guidebook.
   */
  GUIDE_ASSETS = "guide-assets"
}
