import { Component, Prop, h, Element } from '@stencil/core';

@Component({
  tag: 'input-bytestream',
  styleUrl: 'input-bytestream.css'
})
export class InputBytestream {
  @Prop() name!: string;
  @Prop() classes: string;
  @Prop() uuid: string;
  @Prop() location: string;
  @Prop() size: number;
  @Prop() mtime: string;
  @Prop() mediaType: string;
  @Prop() checked: boolean;
  @Prop() onChange: (event: object) => void;

  @Element() el: HTMLElement;

  renderDefaultCheckbox() {
    return(
      <input
        id={this.uuid}
        type="checkbox"
        class="input-bytestream-checkbox"
        name={this.uuid}
        checked={this.checked}
        onChange={this.onChange}
        aria-label="file checkbox"
      />
    )
  }

  render() {
    const defaultClasses: string[] = this.classes.split(' ');
    const rootClasses: string[]  = ["input-bytestream"].concat(defaultClasses);
    const rootClassName: string = rootClasses.join(' ');

    return(
      <div class={rootClassName}>
        <slot name="checkbox" />
        <slot name="icon" />
        <span class="input-bytestream-uuid">{this.uuid}</span>
        <span class="input-bytestream-location">{this.location}</span>
        <span class="input-bytestream-name">{this.name}</span>
        <span class="input-bytestream-size">{this.size}</span>
        <span class="input-bytestream-mtime">{this.mtime}</span>
        <span class="input-bytestream-media-type">{this.mediaType}</span>
      </div>
    );
  }
}
