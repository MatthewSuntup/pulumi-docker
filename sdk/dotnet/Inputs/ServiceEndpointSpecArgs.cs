// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class ServiceEndpointSpecArgs : Pulumi.ResourceArgs
    {
        [Input("mode")]
        public Input<string>? Mode { get; set; }

        [Input("ports")]
        private InputList<Inputs.ServiceEndpointSpecPortArgs>? _ports;
        public InputList<Inputs.ServiceEndpointSpecPortArgs> Ports
        {
            get => _ports ?? (_ports = new InputList<Inputs.ServiceEndpointSpecPortArgs>());
            set => _ports = value;
        }

        public ServiceEndpointSpecArgs()
        {
        }
    }
}
