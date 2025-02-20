// *** WARNING: this file was generated by the Pulumi Terraform Bridge (tfgen) Tool. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

using System;
using System.Collections.Generic;
using System.Collections.Immutable;
using System.Threading.Tasks;
using Pulumi.Serialization;

namespace Pulumi.Docker.Inputs
{

    public sealed class RemoteImageBuildGetArgs : Pulumi.ResourceArgs
    {
        [Input("buildArg")]
        private InputMap<string>? _buildArg;
        public InputMap<string> BuildArg
        {
            get => _buildArg ?? (_buildArg = new InputMap<string>());
            set => _buildArg = value;
        }

        [Input("dockerfile")]
        public Input<string>? Dockerfile { get; set; }

        [Input("forceRemove")]
        public Input<bool>? ForceRemove { get; set; }

        [Input("label")]
        private InputMap<string>? _label;
        public InputMap<string> Label
        {
            get => _label ?? (_label = new InputMap<string>());
            set => _label = value;
        }

        [Input("noCache")]
        public Input<bool>? NoCache { get; set; }

        [Input("path", required: true)]
        public Input<string> Path { get; set; } = null!;

        [Input("remove")]
        public Input<bool>? Remove { get; set; }

        [Input("tags")]
        private InputList<string>? _tags;
        public InputList<string> Tags
        {
            get => _tags ?? (_tags = new InputList<string>());
            set => _tags = value;
        }

        [Input("target")]
        public Input<string>? Target { get; set; }

        public RemoteImageBuildGetArgs()
        {
        }
    }
}
