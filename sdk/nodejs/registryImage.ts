// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * <!-- Bug: Type and Name are switched -->
 * Manages the lifecycle of docker image/tag in a registry.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as docker from "@pulumi/docker";
 *
 * const helloworld = new docker.RegistryImage("helloworld", {
 *     build: {
 *         context: "pathToContextFolder",
 *     },
 * });
 * ```
 *
 * <!-- schema generated by tfplugindocs -->
 * ## Schema
 *
 * ### Required
 *
 * - **name** (String) The name of the Docker image.
 *
 * ### Optional
 *
 * - **build** (Block List, Max: 1) Definition for building the image (see below for nested schema)
 * - **id** (String) The ID of this resource.
 * - **keep_remotely** (Boolean) If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from the docker registry on destroy operation. Defaults to `false`
 *
 * ### Read-Only
 *
 * - **sha256_digest** (String) The sha256 digest of the image.
 *
 * <a id="nestedblock--build"></a>
 * ### Nested Schema for `build`
 *
 * Required:
 *
 * - **context** (String) The path to the context folder
 *
 * Optional:
 *
 * - **auth_config** (Block List) The configuration for the autentication (see below for nested schema)
 * - **build_args** (Map of String) Pairs for build-time variables in the form TODO
 * - **build_id** (String) BuildID is an optional identifier that can be passed together with the build request. The
 * - **cache_from** (List of String) Images to consider as cache sources
 * - **cgroup_parent** (String) Optional parent cgroup for the container
 * - **cpu_period** (Number) The length of a CPU period in microseconds
 * - **cpu_quota** (Number) Microseconds of CPU time that the container can get in a CPU period
 * - **cpu_set_cpus** (String) CPUs in which to allow execution (e.g., `0-3`, `0`, `1`)
 * - **cpu_set_mems** (String) MEMs in which to allow execution (`0-3`, `0`, `1`)
 * - **cpu_shares** (Number) CPU shares (relative weight)
 * - **dockerfile** (String) Dockerfile file. Defaults to `Dockerfile`
 * - **extra_hosts** (List of String) A list of hostnames/IP mappings to add to the container’s /etc/hosts file. Specified in the form ["hostname:IP"]
 * - **force_remove** (Boolean) Always remove intermediate containers
 * - **isolation** (String) Isolation represents the isolation technology of a container. The supported values are
 * - **labels** (Map of String) User-defined key/value metadata
 * - **memory** (Number) Set memory limit for build
 * - **memory_swap** (Number) Total memory (memory + swap), -1 to enable unlimited swap
 * - **network_mode** (String) Set the networking mode for the RUN instructions during build
 * - **no_cache** (Boolean) Do not use the cache when building the image
 * - **platform** (String) Set platform if server is multi-platform capable
 * - **pull_parent** (Boolean) Attempt to pull the image even if an older image exists locally
 * - **remote_context** (String) A Git repository URI or HTTP/HTTPS context URI
 * - **remove** (Boolean) Remove intermediate containers after a successful build (default behavior)
 * - **security_opt** (List of String) The security options
 * - **session_id** (String) Set an ID for the build session
 * - **shm_size** (Number) Size of /dev/shm in bytes. The size must be greater than 0
 * - **squash** (Boolean) If true the new layers are squashed into a new image with a single new layer
 * - **suppress_output** (Boolean) Suppress the build output and print image ID on success
 * - **target** (String) Set the target build stage to build
 * - **ulimit** (Block List) Configuration for ulimits (see below for nested schema)
 * - **version** (String) Version of the unerlying builder to use
 *
 * <a id="nestedblock--build--auth_config"></a>
 * ### Nested Schema for `build.auth_config`
 *
 * Required:
 *
 * - **host_name** (String) hostname of the registry
 *
 * Optional:
 *
 * - **auth** (String) the auth token
 * - **email** (String) the user emal
 * - **identity_token** (String) the identity token
 * - **password** (String) the registry password
 * - **registry_token** (String) the registry token
 * - **server_address** (String) the server address
 * - **user_name** (String) the registry user name
 *
 * <a id="nestedblock--build--ulimit"></a>
 * ### Nested Schema for `build.ulimit`
 *
 * Required:
 *
 * - **hard** (Number) soft limit
 * - **name** (String) type of ulimit, e.g. `nofile`
 * - **soft** (Number) hard limit
 */
export class RegistryImage extends pulumi.CustomResource {
    /**
     * Get an existing RegistryImage resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: RegistryImageState, opts?: pulumi.CustomResourceOptions): RegistryImage {
        return new RegistryImage(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'docker:index/registryImage:RegistryImage';

    /**
     * Returns true if the given object is an instance of RegistryImage.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is RegistryImage {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === RegistryImage.__pulumiType;
    }

    /**
     * Definition for building the image
     */
    public readonly build!: pulumi.Output<outputs.RegistryImageBuild | undefined>;
    /**
     * If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from
     * the docker registry on destroy operation. Defaults to `false`
     */
    public readonly keepRemotely!: pulumi.Output<boolean | undefined>;
    /**
     * The name of the Docker image.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The sha256 digest of the image.
     */
    public /*out*/ readonly sha256Digest!: pulumi.Output<string>;

    /**
     * Create a RegistryImage resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: RegistryImageArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: RegistryImageArgs | RegistryImageState, opts?: pulumi.CustomResourceOptions) {
        let inputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as RegistryImageState | undefined;
            inputs["build"] = state ? state.build : undefined;
            inputs["keepRemotely"] = state ? state.keepRemotely : undefined;
            inputs["name"] = state ? state.name : undefined;
            inputs["sha256Digest"] = state ? state.sha256Digest : undefined;
        } else {
            const args = argsOrState as RegistryImageArgs | undefined;
            inputs["build"] = args ? args.build : undefined;
            inputs["keepRemotely"] = args ? args.keepRemotely : undefined;
            inputs["name"] = args ? args.name : undefined;
            inputs["sha256Digest"] = undefined /*out*/;
        }
        if (!opts.version) {
            opts = pulumi.mergeOptions(opts, { version: utilities.getVersion()});
        }
        super(RegistryImage.__pulumiType, name, inputs, opts);
    }
}

/**
 * Input properties used for looking up and filtering RegistryImage resources.
 */
export interface RegistryImageState {
    /**
     * Definition for building the image
     */
    readonly build?: pulumi.Input<inputs.RegistryImageBuild>;
    /**
     * If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from
     * the docker registry on destroy operation. Defaults to `false`
     */
    readonly keepRemotely?: pulumi.Input<boolean>;
    /**
     * The name of the Docker image.
     */
    readonly name?: pulumi.Input<string>;
    /**
     * The sha256 digest of the image.
     */
    readonly sha256Digest?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a RegistryImage resource.
 */
export interface RegistryImageArgs {
    /**
     * Definition for building the image
     */
    readonly build?: pulumi.Input<inputs.RegistryImageBuild>;
    /**
     * If true, then the Docker image won't be deleted on destroy operation. If this is false, it will delete the image from
     * the docker registry on destroy operation. Defaults to `false`
     */
    readonly keepRemotely?: pulumi.Input<boolean>;
    /**
     * The name of the Docker image.
     */
    readonly name?: pulumi.Input<string>;
}
