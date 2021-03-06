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
	  
		<p>
          <p>#MVP #Highlights #Recognition #DXC #Reshapers </p>
		   <img src="/header.png" alt="Header Image" className="imageheader" /> 
		</p>
		
        <h1 className="title">
          Welcome to Hall of Fame
        </h1>
		
		

        <p className="description">
          This website was developed to highlight our  most valuable resources in DXC, our employees!
        </p>

        <div className="grid">
          <a href="/category" className="card">
            <h3>Navigate through the Hall of Fame &rarr;</h3>
          </a>

          <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=cTXzkw9Vz0Own80zEzjQhuS8315yurZAuFtdvYfJqppUNkhBVTQ1WU9DVERZODg2TktZTU5EUjZBSi4u" className="card">
            <h3>Recognize someone from DXC &rarr;</h3>
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
          margin: 0;
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
          text-align: left;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #7436F0;
          border-color: #7436F0;
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
