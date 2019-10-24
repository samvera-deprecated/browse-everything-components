import { Component, Prop, h, Element, Listen } from '@stencil/core';

@Component({
  tag: 'button-auth'
})
export class BrowseEverythingAuthButton {
  @Prop() classes: string;
  @Prop() href: string;
  @Prop() disabled: boolean = false;
  @Prop() formId: string;

  @Element() el: HTMLElement;

  @Listen('click')
  handleClick(event) {
    this.el.onclick(event);
  }

  render() {
    /*
     * This is needed for MaterialUI integration
     * By default, the MaterialUI components pass the class names into a
     *   "classname" attribute
     * This parses these and applies them to the root element
     */
    const defaultClasses: string[] = this.el.getAttribute('classname').split(' ');
    const rootClasses: string[]  = [].concat(defaultClasses);
    const rootClassName: string = rootClasses.join(' ');
    const textContent = this.disabled ? 'Authorized' : 'Sign In';

    return(
      <button
        class={rootClassName}
        disabled={this.disabled}
        form={this.formId}
        type="button"
        value={this.href}
      >{textContent}</button>
    );
  }
}
