import React from 'react';
import App from 'next/app';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import menus from '../data/menus.json';
import '../styles/index.css';

export default class Application extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <div>
        <header>
          <Navbar menus={menus} />
        </header>
        <div className="container max-auto">
          <Component {...pageProps} />
        </div>
        <Footer>
          <div className="flex flex-wrap">
            <div className="w-1/2">
              <a
                href="/privacy-policy"
                title="Privacy Policy"
                className="hover:underline"
              >
                Privacy Policy
              </a>
            </div>
            <div className="w-1/2 text-right">
              <p>
                <span className="location-icon black" /> Malmskillnadsgatan 32,
                111 51 Stockholm
              </p>
              <p>
                Created by{' '}
                <a href="https://hedy.tech" target="_blank" title="Hedy">
                  <img
                    src={require('static/hedy-black-coral.png')}
                    className="w-4 inline-block"
                    alt="Hedy"
                  />
                </a>
              </p>
            </div>
          </div>
        </Footer>
      </div>
    );
  }
}
