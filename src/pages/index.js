import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';


export default function Home() {
  useEffect(() => {
    // Add data attribute to body for CSS targeting
    document.body.setAttribute('data-route', '/');
    
    return () => {
      document.body.removeAttribute('data-route');
    };
  }, []);

  return (
    <Layout
      title="Welcome to Metadata Capture"
      description="Documentation for the Metadata Capture platform"
    >
      <header className={styles.heroBanner}>
        <div className="container">
          <h1 className="hero__title">Welcome to Metadata Capture</h1>
          <p className="hero__subtitle">Your tool for managing and sharing datasets</p>
          <div>
            <Link className="button button--primary button--lg" to="/intro">
              Get started
            </Link>
          </div>
        </div>
      </header>
      <main className={styles.mainPaddingBottom}>
        <section className={styles.features}>
          <div className="container">
            <div className="row">
              
                <div className="col col--4">
                <div className={styles.homeCard}>
                  <img src="img/im-a-user-people.svg" alt="User icon" style={{ width: 100, height: 100, marginBottom: 12 }} />
                    <h3>
                      <Link to="/category/user-guide">
                        I'm a user
                      </Link>
                    </h3>
                    <p className={styles.homeSubtext}>I want to add, approve, and publish datasets, and manage organisations.</p>
                </div>
                </div>
                              
                <div className="col col--4">
                <div className={styles.homeCard}>
                  <img src="img/im-a-system-admin-server.svg" alt="System Admin icon" style={{ width: 100, height: 100, marginBottom: 12 }} />
                      <h3>
                      <Link to="/category/system-admin-guide">
                        I'm a system admin
                      </Link>
                    </h3>
                    <p className={styles.homeSubtext}>I want to run Metadata Capture on-premises for my organisation.</p>


                </div>
                </div>

                <div className="col col--4">
                <div className={styles.homeCard}>
                  <img src="img/im-a-developer-puzzle.svg" alt="User icon" style={{ width: 100, height: 100, marginBottom: 12 }} />
                      <h3>
                      <Link to="/category/developer-guide">
                        I'm a developer
                      </Link>
                    </h3>
                    <p className={styles.homeSubtext}>I want to develop and deploy new features for Metadata Capture.</p>
                </div>
                </div>


            </div>
          </div>
        </section>
      </main>
    </Layout>
  );



  
}


