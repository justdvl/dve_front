import React from 'react';
import Logo from './Logo';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <>
            <div className="content">
                <div>
                    <Link to="/">
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                borderBottom: '1px solid',
                                position: 'fixed',
                                backgroundColor: 'white',
                                zIndex: 10,
                                maxHeight: 140,
                            }}
                        >
                            <Logo />
                            <div style={{ flexGrow: 1, minWidth: 150 }}></div>
                            <div
                                style={{
                                    padding: 10,
                                    fontSize: 30,
                                    fontFamily: 'Kalam',
                                    flexGrow: 100,
                                }}
                            >
                                <link
                                    rel="preconnect"
                                    href="https://fonts.gstatic.com"
                                />
                                <link
                                    href="https://fonts.googleapis.com/css2?family=Kalam&display=swap"
                                    rel="stylesheet"
                                />
                                Vítajú vás tu dve bodky.{' '}
                            </div>
                            <div style={{ flexGrow: 1 }}></div>
                        </div>
                    </Link>
                </div>
                <div style={{ marginTop: 140 }}>{children}</div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
