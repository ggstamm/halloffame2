import Head from 'next/head'

export default function FirstPost() {
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
        <h1 className="title">
          Hall of Fame
        </h1>
		
		<h2>
		Superstar
		</h2>

        <div className="grid">
		
			<a className="card">
				<img src="/superstar/ademirsilva.jpg" className="pic"/>
				<h3>Ademir Vieira Da Silva</h3>
				<p>Apps SL AMS LATAM Brazil Mining</p>						
			</a>	

			<a className="card">
				<img src="/superstar/andrepinho.jpg" className="pic"/>
				<h3>Andre Romeiro Pinho</h3>
				<p>Apps SL AMS LATAM Brazil Mining</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/andrebaptista.jpg" className="pic"/>
				<h3>Andre Wilver Monteiro Baptista</h3>
				<p>ITO Brazil Delivery Multi Capability System Operation</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/elainebassi.jpg" className="pic"/>
				<h3>Elaine Bassi</h3>
				<p>AMS Commercial 5</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/eltonsoares.jpg" className="pic"/>
				<h3>Elton Soares</h3>
				<p>S A / Mx Solution Support / Delivery</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/fabiogomes.jpg" className="pic"/>
				<h3>Fabio Lourenco Gomes</h3>
				<p>ITO Brazil Delivery Multi Capability</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/laureanogilioli.jpg" className="pic"/>
				<h3>Laureano Marcelo Gilioli</h3>
				<p>Apps SL AMS LATAM Brazil TMT</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/luciaferreira.jpg" className="pic"/>
				<h3>Lucia Cristina de Lima Ferreira</h3>
				<p>AMS ABO Service Lines Region 6</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/maristelagomes.jpg" className="pic"/>
				<h3>Maristela Gomes</h3>
				<p>Security - AMS - Compliance - LATAM</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/mauricioteixeira.jpg" className="pic"/>
				<h3>Mauricio da Silva Teixeira</h3>
				<p>S A / Mx Solution Support / Delivery</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/robsonfaria.jpg" className="pic"/>
				<h3>Robson Faria</h3>
				<p>AMS P2P</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/rosianosales.jpg" className="pic"/>
				<h3>Rosiano Vieira de Sales</h3>
				<p>Delivery EC&A - SAP Technical</p>						
			</a>
			
			<a className="card">
				<img src="/superstar/viniciuspereira.jpg" className="pic"/>
				<h3>Vinicius Rodrigues Pereira</h3>
				<p>SVLM AMS</p>						
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
          height: 100px;
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
		  font-family: Calibri;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
		  font-family: Calibri;
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
          max-width: 1000px;
          margin-top: 1rem;
        }

        .card {
          margin: 1rem;
          flex-basis: 45%;
          padding: 1rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 3px solid #000000;
          border-radius: 20px;
          transition: color 0.15s ease, border-color 0.15s ease;
		  font-family: Calibri;
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
		
		.pic {
		  align-items: center
          height: 12em;
		  width: 16em;
        }
		
		.imageheader {
          height: 4em;
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