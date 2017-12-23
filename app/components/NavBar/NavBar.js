import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';

import './NavBar.css';

export default class NavBar extends Component {

    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => {
        this.setState({ activeItem: name })
        // Assuming section id's are the same as menu items' names
        let element = document.getElementById(name);
        element.scrollIntoView();
    }

    render() {
        const { activeItem } = this.state

        return (
            <nav id="menu-wrapper">
                <Sidebar as={Menu} animation='push' direction='top' visible={true} width='thin'>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        content='HOME'
                        onClick={this.handleItemClick}
                    />

                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        content='ABOUT'
                        onClick={this.handleItemClick}
                    />

                    <Menu.Item
                        name='experience'
                        active={activeItem === 'experience'}
                        content='EXPERIENCE'
                        onClick={this.handleItemClick}
                    />

                    <Menu.Item
                        name='projects'
                        active={activeItem === 'projects'}
                        content='PROJECTS'
                        onClick={this.handleItemClick}
                    />
                    <Menu.Item
                        name='contact'
                        active={activeItem === 'contact'}
                        content='CONTACT'
                        onClick={this.handleItemClick}
                    />
                </Sidebar>
            </nav>
        );
    }
}