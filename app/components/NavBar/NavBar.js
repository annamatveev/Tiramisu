import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { NavLink }  from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends Component {


    state = { activeItem: 'home' };

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state;

        return (

            <Sidebar as={Menu} animation='push' direction='top' visible={true} width='thin'>
                <NavLink  to={'#root'}>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        content='HOME'
                        onClick={this.handleItemClick}
                    />
                </NavLink >

                <NavLink  to={'#about-section-wrapper'}>
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        content='ABOUT'
                        onClick={this.handleItemClick}
                    />
                </NavLink >

                <NavLink  to={'#job-list-wrapper'}>
                    <Menu.Item
                        name='experience'
                        active={activeItem === 'experience'}
                        content='EXPERIENCE'
                        onClick={this.handleItemClick}
                    />
                </NavLink >

                <NavLink  to={'#projects-section-wrapper'}>
                    <Menu.Item
                        name='projects'
                        active={activeItem === 'projects'}
                        content='PROJECTS'
                        onClick={this.handleItemClick}
                    />
                </NavLink >

                <NavLink   to={'#education-section-wrapper'}>
                    <Menu.Item
                        name='education'
                        active={activeItem === 'education'}
                        content='EDUCATION'
                        onClick={this.handleItemClick}
                    />
                </NavLink  >
            </Sidebar>
        );
    }
}