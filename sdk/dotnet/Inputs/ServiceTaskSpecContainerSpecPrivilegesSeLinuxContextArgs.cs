// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextArgs : Pulumi.ResourceArgs
    {
        [Input("disable")]
        public Input<bool>? Disable { get; set; }

        [Input("level")]
        public Input<string>? Level { get; set; }

        [Input("role")]
        public Input<string>? Role { get; set; }

        [Input("type")]
        public Input<string>? Type { get; set; }

        [Input("user")]
        public Input<string>? User { get; set; }

        public ServiceTaskSpecContainerSpecPrivilegesSeLinuxContextArgs()
        {
        }
    }
}
