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
    public sealed class ServiceTaskSpecContainerSpecMountTmpfsOptions
    {
        public readonly int? Mode;
        public readonly int? SizeBytes;

        [OutputConstructor]
        private ServiceTaskSpecContainerSpecMountTmpfsOptions(
            int? mode,

            int? sizeBytes)
        {
            Mode = mode;
            SizeBytes = sizeBytes;
        }
    }
}
