import React from 'react';
import Logo from './Logo';
import Obalka from './Obalka';
import Kosik from './Kosik';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import Snow from './Snow';

const Layout = ({ children }) => {
    return (
        <>
            <Obalka />
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
                                zIndex: 10,
                                maxHeight: 140,
                                backgroundColor: 'white',
                            }}
                        >
                            <Logo />
                            <div style={{ width: 142, height: 100 }}></div>
                            <div
                                style={{
                                    position: 'absolute',
                                    height: 50,
                                    width: 120,
                                }}
                                className="cloudMoves"
                            >
                                <Snow />
                            </div>
                            <div
                                style={{
                                    padding: 10,
                                    fontFamily: 'Kalam',
                                }}
                                className="welcome"
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
                            <Kosik />
                        </div>
                    </Link>
                </div>
                <div style={{ marginTop: 140 }}>
                    <div style={{ padding: 30 }}>{children}</div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Layout;
