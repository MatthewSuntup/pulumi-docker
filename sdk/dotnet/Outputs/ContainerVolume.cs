// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Outputs
{

    [OutputType]
    public sealed class ContainerVolume
    {
        public readonly string? ContainerPath;
        public readonly string? FromContainer;
        public readonly string? HostPath;
        public readonly bool? ReadOnly;
        public readonly string? VolumeName;

        [OutputConstructor]
        private ContainerVolume(
            string? containerPath,

            string? fromContainer,

            string? hostPath,

            bool? readOnly,

            string? volumeName)
        {
            ContainerPath = containerPath;
            FromContainer = fromContainer;
            HostPath = hostPath;
            ReadOnly = readOnly;
            VolumeName = volumeName;
        }
    }
}
