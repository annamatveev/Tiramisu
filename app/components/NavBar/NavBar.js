import React, { Component } from 'react';
import { Menu, Sidebar } from 'semantic-ui-react';
import { Link }  from 'react-router-dom';

import './NavBar.css';

export default class NavBar extends Component {

    state = { activeItem: 'home' }

    render() {
        const { activeItem } = this.state

        return (

            <Sidebar as={Menu} animation='push' direction='top' visible={true} width='thin'>
                <Link to={'#root'}>
                    <Menu.Item
                        name='home'
                        active={activeItem === 'home'}
                        content='HOME'
                    />
                </Link>

                <Link to={'#about-section-wrapper'}>
                    <Menu.Item
                        name='about'
                        active={activeItem === 'about'}
                        content='ABOUT'
                    />
                </Link>

                <Link to={'#job-list-wrapper'}>
                    <Menu.Item
                        name='job-list-wrapper'
                        active={activeItem === 'experience'}
                        content='EXPERIENCE'
                    />
                </Link>

                <Link to={'#projects-section-wrapper'}>
                    <Menu.Item
                        name='projects'
                        active={activeItem === 'projects'}
                        content='PROJECTS'
                    />
                </Link>

                <Link to={'#education-section-wrapper'}>
                    <Menu.Item
                        name='education'
                        active={activeItem === 'education'}
                        content='EDUCATION'
                    />
                </Link>
            </Sidebar>
        );
    }
}