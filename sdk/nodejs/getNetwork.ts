// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import { input as inputs, output as outputs } from "./types";
import * as utilities from "./utilities";

/**
 * `docker.Network` provides details about a specific Docker Network.
 *
 * ## Example Usage
 *
 * ```typescript
 * import * as pulumi from "@pulumi/pulumi";
 * import * as docker from "@pulumi/docker";
 *
 * const main = pulumi.output(docker.getNetwork({
 *     name: "main",
 * }, { async: true }));
 * ```
 *
 * <!-- schema generated by tfplugindocs -->
 * ## Schema
 *
 * ### Required
 *
 * - **name** (String) The name of the Docker network.
 *
 * ### Read-Only
 *
 * - **driver** (String) The driver of the Docker network. Possible values are `bridge`, `host`, `overlay`, `macvlan`. See [network docs](https://docs.docker.com/network/#network-drivers) for more details.
 * - **id** (String) The ID of this resource.
 * - **internal** (Boolean) If `true`, the network is internal.
 * - **ipam_config** (Set of Object) The IPAM configuration options (see below for nested schema)
 * - **options** (Map of String) Only available with bridge networks. See [bridge options docs](https://docs.docker.com/engine/reference/commandline/network_create/#bridge-driver-options) for more details.
 * - **scope** (String) Scope of the network. One of `swarm`, `global`, or `local`.
 *
 * <a id="nestedatt--ipam_config"></a>
 * ### Nested Schema for `ipamConfig`
 *
 * Read-Only:
 *
 * - **aux_address** (Map of String)
 * - **gateway** (String)
 * - **ip_range** (String)
 * - **subnet** (String)
 */
export function getNetwork(args: GetNetworkArgs, opts?: pulumi.InvokeOptions): Promise<GetNetworkResult> {
    if (!opts) {
        opts = {}
    }

    if (!opts.version) {
        opts.version = utilities.getVersion();
    }
    return pulumi.runtime.invoke("docker:index/getNetwork:getNetwork", {
        "name": args.name,
    }, opts);
}

/**
 * A collection of arguments for invoking getNetwork.
 */
export interface GetNetworkArgs {
    readonly name: string;
}

/**
 * A collection of values returned by getNetwork.
 */
export interface GetNetworkResult {
    readonly driver: string;
    readonly id: string;
    readonly internal: boolean;
    readonly ipamConfigs: outputs.GetNetworkIpamConfig[];
    readonly name: string;
    readonly options: {[key: string]: any};
    readonly scope: string;
}
