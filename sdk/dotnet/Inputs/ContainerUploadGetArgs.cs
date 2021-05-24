// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class ContainerUploadGetArgs : Pulumi.ResourceArgs
    {
        [Input("content")]
        public Input<string>? Content { get; set; }

        [Input("contentBase64")]
        public Input<string>? ContentBase64 { get; set; }

        [Input("executable")]
        public Input<bool>? Executable { get; set; }

        [Input("file", required: true)]
        public Input<string> File { get; set; } = null!;

        [Input("source")]
        public Input<string>? Source { get; set; }

        [Input("sourceHash")]
        public Input<string>? SourceHash { get; set; }

        public ContainerUploadGetArgs()
        {
        }
    }
}
