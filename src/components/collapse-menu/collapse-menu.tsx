import {Component, State, h} from '@stencil/core';

@Component({
    tag: 'collapse-menu',
    styleUrl: 'collapse-menu.scss',
    shadow: true
})

export class CollapseMenu {
  
  
  @State() active: boolean = false;

  menuAnimation() {
    this.active = !this.active;
  }

  render() {
    return(
      <div>
        <div id="bg-opacity" class={'' +  (this.active === true ? '' : 'showOpacity') }></div>
        <div id="wrapper">
        <div id="show-menu" class={'start-menu' +  (this.active === true ? '' : ' active') } onClick={()=>this.menuAnimation()}>
        <span class="chevron"></span>
        </div>
        <div id="menu-wrapper" class={'' +  (this.active === true ? '' : 'showMenu') }>
          <div id="swipe-cmpnt" class="">
          <p>Select one of the options below</p>
          <ul>
            <li><a href="#">Menu <span>Option 1</span></a></li>
            <li><a href="#">Menu <span>Option 2</span></a></li>
            <li><a href="#">Menu <span>Option 3</span></a></li>
            <li><a href="#">Menu <span>Option 4</span></a></li>
            <li><a href="#"><span class="far fa-life-ring"></span>Help Center</a></li>
          </ul>
          </div>
        </div>
        </div>
      </div>
    );
  }
}