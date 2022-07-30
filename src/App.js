import './App.css';
import Actors from './components/Actors';

function App() {
  return (
    <div className="App">
       <h1>"Icónicos personajes femeninos"</h1>
        <div className='container-principal'>
         
            <Actors
              name='Villanelle Astankova'
              description='Con su icónico sentido de la moda, impredecible humor, ininterminable amor por mujeres mayores, brutales habilidades y fatal creatividad para cumplir de forma exitosa su labor como asesina a sueldo, llegó a ser uno de los personajes más queridos de los últimos 10 años, galardonando sin fin tanto a la actriz como a la serie.'
              picture='villanelle'/>
            <Actors
              name='Eve Polastri'
              description='Pocas metamorfosis han sido tan satisfactorias y emocionantes de ver como la de Eve. Desde el principio de la serie pudimos ver en ella (tal padre conoce a su hijo) su potencial de grandiosidad. Su reprimido anhelo de acción se estrelló al conocer a una famosa e incógnita asesina a sueldo desembocaría un horrible descenso de sus valores morales y ruptura de su personalidad que no fue más que delicioso de presenciar.'
              picture='eve'/>  
            <Actors
              name='Princesa Azula'
              description='Al crecer dentro de la familia más poderosa de su nación se supondría que tuvo todo lo que siempre deseó. Pero el claro favoritismo hacia su hermano, falta de comprensión de su madre, altas expectativas de su padre y aterrador prodigio solo llegaron a convertirla en una máquina atroz y perfecta para completar los deseos de su padre, el emperador: conquistar las demás naciones y eliminar a su hermano.'
              picture='azula'/>  
        </div>
    </div>
  );
}

export default App;
