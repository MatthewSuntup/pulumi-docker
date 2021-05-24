// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class ServiceTaskSpecArgs : Pulumi.ResourceArgs
    {
        [Input("containerSpec", required: true)]
        public Input<Inputs.ServiceTaskSpecContainerSpecArgs> ContainerSpec { get; set; } = null!;

        [Input("forceUpdate")]
        public Input<int>? ForceUpdate { get; set; }

        [Input("logDriver")]
        public Input<Inputs.ServiceTaskSpecLogDriverArgs>? LogDriver { get; set; }

        [Input("networks")]
        private InputList<string>? _networks;
        public InputList<string> Networks
        {
            get => _networks ?? (_networks = new InputList<string>());
            set => _networks = value;
        }

        [Input("placement")]
        public Input<Inputs.ServiceTaskSpecPlacementArgs>? Placement { get; set; }

        [Input("resources")]
        public Input<Inputs.ServiceTaskSpecResourcesArgs>? Resources { get; set; }

        [Input("restartPolicy")]
        public Input<Inputs.ServiceTaskSpecRestartPolicyArgs>? RestartPolicy { get; set; }

        [Input("runtime")]
        public Input<string>? Runtime { get; set; }

        public ServiceTaskSpecArgs()
        {
        }
    }
}
