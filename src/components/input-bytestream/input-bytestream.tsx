import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'input-bytestream',
  styleUrl: 'input-bytestream.css',
  shadow: true
})
export class InputBytestream {
  @Prop() uuid!: string;
  @Prop() location!: string;
  // This requires that the Container be implemented
  // @Prop() container: Container;
  @Prop() name!: string;
  @Prop() size: number;
  @Prop() mtime: string;
  @Prop() mediaType: string;

  render() {
    return(
      <div class="input-bytestream">
        <div>
          <input class="input-bytestream-checkbox" type="checkbox" id={this.uuid} name={this.uuid} />
        </div>
        <div class="input-bytestream-uuid">{this.uuid}</div>
        <div class="input-bytestream-location">{this.location}</div>
        <div class="input-bytestream-name">{this.name}</div>
        <div class="input-bytestream-size">{this.size}</div>
        <div class="input-bytestream-mtime">{this.mtime}</div>
        <div class="input-bytestream-media-type">{this.mediaType}</div>
      </div>
    );
  }
}
