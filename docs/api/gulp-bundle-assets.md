<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@userfrosting/gulp-bundle-assets](./gulp-bundle-assets.md)

## gulp-bundle-assets package

## Classes

|  Class | Description |
|  --- | --- |
|  [Bundler](./gulp-bundle-assets.bundler.md) | Assists in orchastrating bundle operations. |

## Enumerations

|  Enumeration | Description |
|  --- | --- |
|  [CollisionReactions](./gulp-bundle-assets.collisionreactions.md) | Rules for how a bundle collision may be treated. |
|  [LogLevel](./gulp-bundle-assets.loglevel.md) | Log levels. |

## Functions

|  Function | Description |
|  --- | --- |
|  [MergeRawConfigs(rawConfigs)](./gulp-bundle-assets.mergerawconfigs.md) | Merges a collection of configurations. No validation is conducted, it is expected that provided inputs are all valid.<code>bundle-&gt;(BundleName)-&gt;options-&gt;sprinkle-&gt;onCollision = (replace&#124;merge&#124;ignore&#124;error)</code> may be used to modify treatment of collided bundles. |
|  [ValidateRawConfig(config)](./gulp-bundle-assets.validaterawconfig.md) | Throws an exception if the provided raw config contains invalid data. |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [Bundle](./gulp-bundle-assets.bundle.md) | Represents an asset bundle |
|  [Bundlers](./gulp-bundle-assets.bundlers.md) | Interface defining factories required to bundle styles and scripts. |
|  [BundlerStreamFactory](./gulp-bundle-assets.bundlerstreamfactory.md) | A function that returns a stream that will be used to bundle assets. |
|  [Bundles](./gulp-bundle-assets.bundles.md) | Map of bundles. |
|  [Config](./gulp-bundle-assets.config.md) | Root object of raw configuration. |
|  [Options](./gulp-bundle-assets.options.md) | Represents an asset bundles root options node. |
|  [SprinkleOptions](./gulp-bundle-assets.sprinkleoptions.md) | Options relevent to UserFrosting's Sprinkle system. |
