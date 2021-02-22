import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Hall of Fame</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  
	  <header>	  
		<img src="/dxclogo.png" className="logo" align-items= "center"/>
	  </header>

      <main>
	  
	    <div >
		<center>
		
		<h3 className="title">
			February 2021 
		</h3>	  
        <h1 >
          Select the Category
        </h1>
		
		</center>
		</div>	
			
		<div className="grid">
		
          <a href="/hallsuperstar" className="card" >
			<img src="/superstar.jpg" classname="center"/>
            <h3>Superstar</h3>
          </a>    
          
        </div>
  
        <div className="grid">
		
          <a href="/hallCollaborate" className="card" >
			<img src="/collaborate.jpg" classname="center"/>
            <h3>Collaborating as One Team</h3>
          </a>
		  
		   <a href="/hallRole" className="card">
		  <img src="/role.jpg" classname="center"/>
            <h3>Being a Role Model</h3>
          </a>

          <a href="/hallAbove" className="card">
		  <img src="/above.jpg" classname="center"/>
            <h3>Going Above and Beyond for Our Customers</h3>
          </a>
		  
		  <a href="/hallStepping" className="card">
		  <img src="/stepping.jpg" classname="center"/>
            <h3>Stepping Up to the Challenge</h3>
          </a>

         
          
        </div>
      </main>

      <footer>
        <a
          href="https://www.dxc.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/dxclogo.png" alt="DXC Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
		
		header{
			width: 100%;
			height: 60px;
			background: #000000;
		}

        main {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 80px;
          display: flex;
          justify-content: center;
          align-items: center;
		  background: #000000;
		  color: #ffffff;		  
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 10;
		  color: #6f30a0;
          line-height: 1.15;
          font-size: 4rem;
        }
		
		.title2 {
		  color: #6f30a0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #7436F0;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 4em;
        }
		
		.imageheader {
          height: 20em;
        }
		
		.center {
		  display: block;
		  margin-left: auto;
		  margin-right: auto;
		}

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
