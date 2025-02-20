// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class ContainerVolumeArgs : Pulumi.ResourceArgs
    {
        [Input("containerPath")]
        public Input<string>? ContainerPath { get; set; }

        [Input("fromContainer")]
        public Input<string>? FromContainer { get; set; }

        [Input("hostPath")]
        public Input<string>? HostPath { get; set; }

        [Input("readOnly")]
        public Input<bool>? ReadOnly { get; set; }

        [Input("volumeName")]
        public Input<string>? VolumeName { get; set; }

        public ContainerVolumeArgs()
        {
        }
    }
}
