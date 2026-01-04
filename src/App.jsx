import React, { useState, useEffect, useRef } from 'react'
import { Heart, Phone, Calendar, User, ChevronRight, Volume2, VolumeX, Music } from 'lucide-react'
import grandmaImg from './assets/vieja-gorda.jpg'
import monoPuroImg from './assets/mono-puro.png'
import monoImg from './assets/mono.png'

const Navbar = () => (
    <nav className="glass" style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000, padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 className="gradient-text" style={{ fontSize: '1.8rem' }}>AbuelaCare</h1>
            <div style={{ display: 'flex', gap: '2rem' }}>
                <a href="#inicio" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600 }}>Inicio</a>
                <a href="#servicios" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600 }}>Servicios</a>
                <a href="#monos" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600 }}>Clan Mono</a>
                <a href="#insultos" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600 }}>Abuelas</a>
                <a href="#ciegos" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600 }}>Ciegos</a>
                <a href="#humor" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600 }}>Humor</a>
                <a href="#contacto" style={{ textDecoration: 'none', color: 'var(--text-main)', fontWeight: 600 }}>Contacto</a>
            </div>
        </div>
    </nav>
)

const Hero = ({ onAction }) => (
    <section id="inicio" style={{
        paddingTop: '160px',
        paddingBottom: '100px',
        background: 'radial-gradient(circle at top right, rgba(255, 107, 107, 0.1), transparent), radial-gradient(circle at bottom left, rgba(254, 202, 87, 0.1), transparent)'
    }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <div className="animate-fade-in">
                <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>
                    Estamos aquí para joderte, <span className="gradient-text">puta vieja asquerosa</span>.
                </h2>
                <p style={{ fontSize: '1.5rem', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto 2.5rem' }}>
                    Servicios premium diseñados con amor para que nunca te falte nada. Desde ayuda con el móvil hasta acompañamiento diario.
                </p>
                <button
                    onClick={onAction}
                    className="btn-primary"
                    style={{ textDecoration: 'none', border: 'none', cursor: 'pointer' }}
                >
                    Descubre cómo podemos joderte
                </button>
            </div>
        </div>
    </section>
)

const ServiceCard = ({ icon: Icon, title, description, color }) => (
    <div className="glass animate-fade-in" style={{
        padding: '2.5rem',
        borderRadius: '24px',
        textAlign: 'left',
        transition: 'transform 0.3s ease'
    }}>
        <div style={{
            background: color,
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            color: 'white'
        }}>
            <Icon size={32} />
        </div>
        <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>{description}</p>
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', textDecoration: 'none', fontWeight: 600 }}>
            Saber más <ChevronRight size={20} />
        </a>
    </div>
)

const Services = () => (
    <section id="servicios">
        <div className="container">
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }}>¿En qué podemos ayudarte hoy?</h2>
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem'
            }}>
                <ServiceCard
                    icon={Phone}
                    title="Ayuda Tecnológica"
                    description="Aprendemos juntas a usar el WhatsApp, hacer videollamadas y mucho más sin complicaciones."
                    color="var(--accent)"
                />
                <ServiceCard
                    icon={Calendar}
                    title="Gestión de Citas"
                    description="Nos encargamos de pedir tus citas médicas y recordarte tus medicamentos a tiempo."
                    color="var(--primary)"
                />
                <ServiceCard
                    icon={Heart}
                    title="Compañía y Paseos"
                    description="Porque hablar y caminar juntas es la mejor medicina. Siempre a tu lado."
                    color="var(--secondary)"
                />
            </div>
        </div>
    </section>
)

const Footer = () => (
    <footer className="glass" style={{ padding: '4rem 0', marginTop: '80px' }}>
        <div className="container" style={{ textAlign: 'center' }}>
            <h2 className="gradient-text" style={{ fontSize: '2rem', marginBottom: '1rem' }}>AbuelaCare</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Cuidando de lo que más importa con todo el "cariño".</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
                <a href="#" style={{ color: 'var(--text-main)' }}>Aviso Legal</a>
                <a href="#" style={{ color: 'var(--text-main)' }}>Privacidad</a>
                <a href="#" style={{ color: 'var(--text-main)' }}>Contacto</a>
            </div>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>© 2026 AbuelaCare. Creado con 😈 para todas las abuelas.</p>
        </div>
    </footer>
)

const InsultGenerator = () => {
    const insults = [
        "¡Vete a tejer calcetines, vieja pelleja!",
        "Tu dentadura postiza tiene más vida que tú.",
        "Hueles a naftalina y a decisiones equivocadas.",
        "Eres más lenta que el internet de los 90.",
        "¡Tu bisabuelo era más joven que tú!",
        "¡Qué asco das, momia viviente!",
        "¿Todavía sigues por aquí? Pensaba que eras un fósil.",
        "Pareces un mapa de carreteras con tanto pliegue y arruga.",
        "Incluso la Parca te ha dejado en 'visto' por puro aburrimiento.",
        "Tu cara es el motivo por el que el botox se declaró en huelga.",
        "Eres un recordatorio andante de por qué existe el olvido.",
        "Si la amargura diera luz, alumbrarías todo el continente.",
        "Tu única utilidad es servir de advertencia para las nuevas generaciones.",
        "Haces que el vinagre parezca un batido de fresa, vieja amargada."
    ];
    const [insult, setInsult] = useState("");

    const generateInsult = () => {
        const randomInsult = insults[Math.floor(Math.random() * insults.length)];
        setInsult(randomInsult);
    };

    return (
        <section id="insultos" style={{ textAlign: 'center', padding: '60px 0', background: 'rgba(255,0,0,0.05)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Zona de Realidad para Mayores</h2>
                <div className="glass" style={{ padding: '3rem', borderRadius: '30px', maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ fontSize: '2rem', minHeight: '3rem', marginBottom: '2rem', color: 'var(--primary)', fontWeight: 'bold' }}>
                        {insult || "Pulsa el botón para tu dosis de verdad..."}
                    </p>
                    <button
                        onClick={generateInsult}
                        className="btn-primary"
                        style={{ background: 'linear-gradient(135deg, #d63031, #e17055)' }}
                    >
                        ¡INSÚLTAME MUY FUERTE!
                    </button>
                </div>
            </div>
        </section>
    );
}

const BlindInsultGenerator = ({ volume }) => {
    const blindInsults = [
        "¿Buscas el botón? Está justo donde no puedes verlo, pedazo de topo.",
        "Si pudieras ver tu cara, preferirías seguir ciego para el resto de tus días.",
        "El diseño de esta web es una obra de arte premium, qué pena que no tengas ni idea de lo que digo.",
        "No te preocupes, el mundo no se pierde nada porque no lo mires, eres un estorbo visual.",
        "Escucha bien mi voz, es lo único que tienes, porque vista... andas bastante escaso.",
        "Te he puesto un botón gigante en la pantalla, a ver si por el sonido de tus dedos al aire lo encuentras."
    ];

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.pitch = 0.8;
        utterance.rate = 1;
        utterance.volume = volume;
        window.speechSynthesis.speak(utterance);
    };

    const handleBlindClick = () => {
        const randomInsult = blindInsults[Math.floor(Math.random() * blindInsults.length)];
        speak(randomInsult);
    };

    return (
        <section id="ciegos" style={{ textAlign: 'center', padding: '60px 0', background: 'rgba(0,0,0,0.05)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Rincón para Invidentes</h2>
                <div className="glass" style={{ padding: '3rem', borderRadius: '30px', maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                        Si no puedes leer esto, dale al botón. He optimizado el audio para que escuches la cruda realidad.
                    </p>
                    <button
                        onClick={handleBlindClick}
                        className="btn-primary"
                        style={{
                            background: 'linear-gradient(135deg, #2d3436, #636e72)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.2)'
                        }}
                    >
                        ESCÚCHAME BIEN (AUDIO)
                    </button>
                </div>
            </div>
        </section>
    );
}

const DarkHumorGenerator = ({ volume }) => {
    const [joke, setJoke] = useState("");
    const jokes = [
        "Mi abuelo murió en paz mientras dormía... No como los pasajeros de su coche que gritaban horrorizados.",
        "Le pregunté a mi abuela qué quería para su cumpleaños. Dijo: 'Algo que me haga parecer más joven'. Así que le compré un ataúd nuevo.",
        "¿Cuál es la diferencia entre una abuela y un yogur? El yogur tiene fecha de caducidad... la abuela ya la pasó.",
        "Doctor, ¿cómo salió la operación de mi abuelo? - Pues... digamos que la herencia ya está disponible.",
        "He decidido que quiero morir como mi abuelo, rodeado de sus seres queridos... y no como sus víctimas en el sótano.",
        "¿Por qué los ciegos no pueden ver películas de miedo? Porque ya viven en una pesadilla constante.",
        "Mi abuela dice que la edad es solo un número. Sí, pero en su caso es un número que se acerca peligrosamente al cero.",
        "¿Sabes por qué a las abuelas les gusta ir al cementerio? Porque es como ir de escaparates.",
        "Mi abuela es tan vieja que su certificado de nacimiento ha caducado.",
        "Abuela, ¿qué hace ahí sentada? - Nada, esperando a que llegue mi hora. - Pues póngase cómoda, que esto va para largo.",
        "¿Cuál es el postre favorito de una abuela? Las pastillas de la tensión con un chorrito de coñac.",
        "Mi abuela no tiene arrugas, tiene caminos de la experiencia... que terminan en un callejón sin salida.",
        "Doctor, ¿mi abuela tiene cura? - No, pero tiene un testamento muy interesante.",
        "Abuela, cuéntame un cuento. - Había una vez una mujer que no tenía nietos pesados... y vivió feliz para siempre.",
        "¿Por qué las abuelas llevan perfume de flores? Para que el enterrador se vaya acostumbrando al olor.",
        "Mi abuela dice que ve la luz al final del túnel. Yo le digo que es el tren que viene a por ella.",
        "¿Cuál es la diferencia entre una abuela y una batería? Que la batería tiene un lado positivo.",
        "He decorado mi sótano con un estilo muy minimalista: solo una cadena, un grillete y mucha oscuridad.",
        "En mi sótano no hay wifi, pero hay un silencio sepulcral que te dejará sin aliento... literalmente.",
        "¿Por qué el sótano es el mejor sitio para los invitados? Porque nunca se quejan de la falta de luz cuando tienen la boca tapada.",
        "Mi abuelo siempre decía: 'Si la vida te da limones, haz limonada'. Pero si la vida te da un sótano oscuro, haz una colección de... amigos silenciosos.",
        "¿Cuál es la diferencia entre un niño y un saco de boxeo? Que el saco de boxeo no llora cuando le pegas un buen gancho.",
        "Mi padre me enseñó que los problemas se solucionan hablando. Pero si no funciona, un cinturón de cuero soluciona el resto de la discusión.",
        "No es que me guste pegar a la gente, es que mi mano tiene una atracción gravitatoria muy fuerte hacia las mejillas de los idiotas.",
        "Mi sótano es como Las Vegas: lo que pasa en el sótano, se queda en el sótano... bajo tres metros de tierra.",
        "¿Buscas la salida? Está justo detrás de la puerta cerrada con candado... buena suerte con las uñas.",
        "El amor es como un golpe bien dado: te deja sin palabras y con un ojo morado para recordarlo.",
        "¿Por qué las abuelas cruzan la calle tan despacio? Para darle tiempo al conductor a apuntar bien.",
        "Ayer atropellé a una vieja. Lo peor no fue el golpe, sino que me rayó el capó con la cadera de titanio.",
        "¿Qué es lo último que pasa por la cabeza de un viejo al ser atropellado por un camión? Sus propias vértebras.",
        "Mi abuelo era un hombre de mundo, hasta que un autobús lo hizo un hombre de asfalto.",
        "¿Cuál es la diferencia entre un perro y una vieja en mitad de la carretera? Que por el perro frenas.",
        "No es que haya atropellado a tu abuela, es que la calle necesitaba un nuevo bache y ella se ofreció voluntaria.",
        "Si ver a una abuela en un paso de cebra, recuerda: los puntos del carné se pierden, pero los puntos de estilo son para siempre.",
        "Mi coche tiene un imán para las dentaduras postizas; cada vez que paso por un asilo, el parachoques vuelve lleno.",
        "¿Cómo se llama una vieja que ha sido atropellada por una apisonadora? Una alfombra de bienvenida muy arrugada.",
        "Atropellar a un anciano es como jugar a los bolos: si cae el resto de la excursión del IMSERSO, ¡pleno!",
        "¿Cuál es la diferencia entre una abuela y una cebolla? Que cuando troceas a la abuela te ríes, y con la cebolla lloras.",
        "Mi abuelo murió gritando de terror, mientras que el resto de los pasajeros del autobús dormían plácidamente. Fue el mejor conductor que he conocido.",
        "¿Por qué el cementerio está rodeado por un muro? Porque la gente se muere por entrar... y los de dentro no tienen prisa por salir.",
        "¿Qué es blanco, negro y rojo y no puede cruzar una puerta giratoria? Una vieja con una lanza atravesada en el pecho.",
        "Ayer mi abuela me pidió que le pasara el champú, pero yo le pasé el pegamento extrafuerte. ¡Vaya cara que se le quedó! Literalmente, se le quedó así para siempre.",
        "Si la vida te da limones, haz limonada. Si la vida te da una abuela con demencia, dile que ha ganado la lotería todos los días para verla feliz un segundo antes de que se le olvide.",
        "Mi abuela quería morir rodeada de flores. Así que la llevamos al jardín y la enterramos viva. Estaba rodeada, técnicamente no mentimos.",
        "¿Cuál es la diferencia entre un trampolín y una vieja? Que para saltar en el trampolín te quitas los zapatos.",
        "El humor negro es como las piernas: unos tienen y otros no. Mi abuelo no tiene, se las comió la diabetes.",
        "¿Por qué los huérfanos no pueden jugar al escondite? Porque nadie los busca."
    ];

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.pitch = 0.5; // Voice slightly deeper for dark humor
        utterance.rate = 0.9;
        utterance.volume = volume;
        window.speechSynthesis.speak(utterance);
    };

    const handleJokeClick = () => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        setJoke(randomJoke);
        speak(randomJoke);
    };

    return (
        <section id="humor" style={{ textAlign: 'center', padding: '60px 0', background: 'rgba(45, 52, 54, 0.05)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Humor de Ultratumba</h2>
                <div className="glass" style={{ padding: '3rem', borderRadius: '30px', maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.5rem', minHeight: '4rem', marginBottom: '2rem', color: '#2d3436', fontWeight: 'bold' }}>
                        {joke || "¿Te gusta el humor tan negro como el futuro de tu pensión? Dale al botón."}
                    </p>
                    <button
                        onClick={handleJokeClick}
                        className="btn-primary"
                        style={{
                            background: 'linear-gradient(135deg, #2d3436, #000000)',
                            color: '#fff'
                        }}
                    >
                        ESCÜCHAR CHISTE MACABRO
                    </button>
                </div>
            </div>
        </section>
    );
}

const FatHumorGenerator = ({ volume }) => {
    const [joke, setJoke] = useState("");
    const jokes = [
        "¿Por qué los gordos son excelentes amigos? Porque nunca te dejarán plantado... literalmente no pueden levantarse del sitio.",
        "Mi vecino es tan gordo que su grupo sanguíneo es Nocilla.",
        "¿Cómo se llama un gordo en un incendio? Una barbacoa de autoservicio.",
        "Ayer vi a un gordo corriendo. Fue un momento histórico, el suelo todavía tiene pesadillas con el terremoto.",
        "¿Cuál es el deporte favorito de la gente con sobrepeso? El levantamiento de tapa de yogur.",
        "Mi prima es tan gorda que para darle un abrazo hay que pedir una licencia de obras.",
        "¿Por qué los gordos no van al cielo? Porque la escalera mecánica de San Pedro tiene un límite de peso.",
        "No es que estés gordo, es que tu cuerpo ha decidido guardar comida para la Tercera Guerra Mundial... y para la Cuarta también.",
        "¿Cuál es la diferencia entre un gordo y una rueda? Que la rueda deja de rodar cuando llegas al destino.",
        "Ayer un gordo me pidió que lo ayudara a bajar de peso. Le dije que se tirara por un barranco, la gravedad hace el resto del trabajo sucio.",
        "Mi tío es tan gordo que su sombra tiene masa gravitatoria propia.",
        "¿Por qué los gordos no pueden ser ninjas? Porque el sigilo no funciona cuando tus pasos suenan como un bombo.",
        "La dieta de mi hermana es muy simple: si no puede ver sus pies, es que no necesita más postre.",
        "¿Cuál es el animal más cercano a una persona con obesidad mórbida? El sofá, porque ya han empezado el proceso de fusión molecular.",
        "Ayer un gordo se cayó en la calle y la NASA detectó una perturbación en la rotación terrestre.",
        "Subí a la báscula y me dijo: 'De uno en uno, por favor, que no soy el suelo de un gimnasio'.",
        "Mi primo es tan gordo que cuando cruza un puente, los ingenieros de Fomento activan el protocolo de terremoto de nivel 8.",
        "En el ascensor, no le das al botón del piso, le das directamente al de 'Sobrecarga' por pura costumbre.",
        "Eres un zampa bollos profesional: tu único récord olímpico es el de la apnea mientras devoras una caja de donuts sin respirar.",
        "Tus lorcitas tienen vida propia; ayer vi a una de ellas intentando pedir un taxi para irse a vivir a una granja de mantequilla.",
        "La báscula no te marca el peso, te marca el código postal del planeta más cercano con una gravedad que soporte tu masa.",
        "¿Por qué nunca usas ascensores? Porque el cartel de 'Máximo 6 personas' te lo tomas como un reto personal y no como una advertencia de seguridad.",
        "Cuando caminas por un puente de madera, los clavos saltan como palomitas de maíz por puro pánico acústico.",
        "Eres tan zampa bollos que el panadero local ha podido jubilarse antes de tiempo gracias a tu adicción a los glúcidos de absorción rápida.",
        "Tus lorcitas son como un mapa del tesoro, pero el único tesoro que esconden son migas de galletas de hace tres meses.",
        "Para ti, el kebab no es cena, es un suplemento vitamínico que te tomas entre hamburguesa y hamburguesa.",
        "Tu relación con el sofá es tan íntima que ya habéis empezado a compartir el ADN y la tapicería.",
        "¿Por qué cuando vas al zoo los cerditos te saludan? Porque piensan que ha llegado la jefa de la manada para la hora del rancho.",
        "No es que seas una morsa, es que las morsas te tienen envidia por tu capacidad de almacenar grasa abdominal sin necesidad de vivir en el Ártico.",
        "Cuando entras al recinto de los gorilas, los machos alfa se apartan por respeto a un animal de alto peso como tú.",
        "Eres como un golem de elixir: cuando te mueves, el suelo tiembla y cuando te mueres, dejas dos mini-gordas igual de pesadas.",
        "Tu dieta es tan extrema que la hamburguesa ha pasado de ser comida a ser tu principal grupo sanguíneo.",
        "Si te pierdes en el zoo, no te buscan en la salida, te buscan en el foso de los hipopótamos porque te confunden con el paisaje.",
        "Ayer te vieron merendando y los animales de alto peso del documental de La 2 se sintieron acomplejados por tu ritmo de masticación.",
        "Eres un golem de elixir en la vida real: si te pinchan, sueltas aceite de freidora en lugar de elixir rosa.",
        "Es más fácil saltarte que rodearte, porque para darte la vuelta completa necesito un GPS y tres días de provisiones.",
        "No eres una persona, eres un planeta gaseoso; tienes tu propio campo gravitatorio y tres lunas orbitando alrededor de tu ombligo.",
        "Tu médico no te recomienda dieta, te recomienda que te inscribas en el registro de cuerpos celestes de la NASA.",
        "¿Cuál es la diferencia entre tú y Júpiter? Que Júpiter tiene anillos y tú tienes michelines que se ven desde la estación espacial internacional.",
        "Eres tan grande que cuando te sientas en la playa, la marea sube en el otro lado del océano por desplazamiento de masa planetaria."
    ];

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.pitch = 0.8;
        utterance.rate = 0.85;
        utterance.volume = volume;
        window.speechSynthesis.speak(utterance);
    };

    const handleJokeClick = () => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        setJoke(randomJoke);
        speak(randomJoke);
    };

    return (
        <section id="humor-gordo" style={{ textAlign: 'center', padding: '60px 0', background: 'rgba(230, 126, 34, 0.05)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Humor de Alto Tonelaje</h2>
                <div className="glass" style={{ padding: '3rem', borderRadius: '30px', maxWidth: '750px', margin: '0 auto', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                    <p style={{ fontSize: '1.6rem', minHeight: '5rem', marginBottom: '2rem', color: '#d35400', fontWeight: '900', textTransform: 'uppercase' }}>
                        {joke || "¿Preparado para chistes con mucho peso? Dale al botón si te atreves."}
                    </p>
                    <button
                        onClick={handleJokeClick}
                        className="btn-primary"
                        style={{
                            background: 'linear-gradient(135deg, #e67e22, #d35400)',
                            color: '#fff',
                            transform: 'scale(1.1)',
                            fontWeight: 'bold'
                        }}
                    >
                        CHISTE XL
                    </button>
                </div>
            </div>
        </section>
    );
}

const BaldHumorGenerator = ({ volume }) => {
    const [joke, setJoke] = useState("");
    const jokes = [
        "¿Por qué los calvos siempre están contentos? Porque no tienen ni un pelo de tontos... ni de nada.",
        "Mi amigo es tan calvo que cuando se lava la cara no sabe dónde parar.",
        "¿Cuál es el postre favorito de un calvo? El helado de 'corte'.",
        "Ayer vi a un calvo con un tatuaje de un conejo en la coronilla. Dice que desde lejos parece un pelo.",
        "¿Por qué los calvos no usan champú? Porque usan abrillantador de suelos.",
        "Mi jefe es tan calvo que su cabeza parece un rodillazo en un jersey de lana.",
        "¿Cómo se llama un calvo que se echa colonia? Una bola de discoteca con olor a hombre.",
        "Los calvos no tienen caspa, tienen nieve en el parquet.",
        "¿Cuál es la diferencia entre un calvo y una bola de cristal? Que la bola de cristal tiene futuro.",
        "Ayer le regalé un peine a un calvo. Aún está buscando por dónde empezar.",
        "No es que seas calvo, es que tu cara ha decidido expandir su territorio.",
        "¿Por qué los calvos cruzan la calle en zigzag? Para que el reflejo del sol no ciegue a los conductores.",
        "Un calvo en la nieve es un peligro público: nunca sabes si es una montaña o un huevo de pascua gigante.",
        "¿Cómo se sabe si un calvo se ha lavado la cabeza? Porque brilla más que el futuro de un becario.",
        "Mi padre dice que el pelo es para los débiles. Él es tan fuerte que el pelo le tiene miedo.",
        "¿Cuál es el colmo de un calvo? Perder el juicio y no poder mesarse los cabellos.",
        "¿Qué hace un calvo con un cepillo? Nada, lo tiene de recordatorio de tiempos mejores.",
        "Mi tío es tan calvo que cuando se pone un jersey de cuello alto parece un desodorante de bola.",
        "¿Por qué los calvos no pueden ser abogados? Porque no tienen ni un pelo de tontos, pero tampoco tienen pruebas que peinar.",
        "Venderle un crecepelo a un calvo es como venderle un piano a una ballena: mucha esperanza y cero resultados."
    ];

    const speak = (text) => {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.pitch = 1.2;
        utterance.rate = 1.0;
        utterance.volume = volume;
        window.speechSynthesis.speak(utterance);
    };

    const handleJokeClick = () => {
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        setJoke(randomJoke);
        speak(randomJoke);
    };

    return (
        <section id="humor-calvo" style={{ textAlign: 'center', padding: '60px 0', background: 'rgba(52, 152, 219, 0.05)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Humor Deslumbrante</h2>
                <div className="glass" style={{
                    padding: '3rem',
                    borderRadius: '30px',
                    maxWidth: '750px',
                    margin: '0 auto',
                    boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)',
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
                    border: '1px solid rgba(255,255,255,0.3)'
                }}>
                    <p style={{
                        fontSize: '1.6rem',
                        minHeight: '5rem',
                        marginBottom: '2rem',
                        color: '#2980b9',
                        fontWeight: 'bold',
                        textShadow: '0 0 10px rgba(52, 152, 219, 0.2)'
                    }}>
                        {joke || "¿Quieres algo que brille más que tu futuro? Dale al botón."}
                    </p>
                    <button
                        onClick={handleJokeClick}
                        className="btn-primary"
                        style={{
                            background: 'linear-gradient(135deg, #3498db, #2980b9)',
                            color: '#fff',
                            boxShadow: '0 0 20px rgba(52, 152, 219, 0.5)'
                        }}
                    >
                        CHISTE BRILLANTE
                    </button>
                </div>
            </div>
        </section>
    );
}

const AudioControlPanel = ({ musicVolume, setMusicVolume, voiceVolume, setVoiceVolume }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const playerRef = useRef(null);
    const [isApiReady, setIsApiReady] = useState(false);

    useEffect(() => {
        // Load YouTube API
        if (!window.YT) {
            const tag = document.createElement('script');
            tag.src = "https://www.youtube.com/iframe_api";
            const firstScriptTag = document.getElementsByTagName('script')[0];
            firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

            window.onYouTubeIframeAPIReady = () => {
                createPlayer();
            };
        } else {
            createPlayer();
        }

        function createPlayer() {
            playerRef.current = new window.YT.Player('youtube-player', {
                height: '0',
                width: '0',
                videoId: '9HWuF8wkGYM',
                playerVars: {
                    autoplay: 0,
                    loop: 1,
                    playlist: '9HWuF8wkGYM'
                },
                events: {
                    onReady: (event) => {
                        setIsApiReady(true);
                        event.target.setVolume(musicVolume * 100);
                    }
                }
            });
        }
    }, []);

    useEffect(() => {
        if (isApiReady && playerRef.current && playerRef.current.setVolume) {
            playerRef.current.setVolume(musicVolume * 100);
        }
    }, [musicVolume, isApiReady]);

    const toggleMusic = () => {
        if (!isApiReady) return;

        if (isPlaying) {
            playerRef.current.pauseVideo();
        } else {
            playerRef.current.playVideo();
        }
        setIsPlaying(!isPlaying);
    };

    return (
        <div
            style={{
                position: 'fixed',
                bottom: '20px',
                right: '20px',
                zIndex: 2000,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '15px'
            }}
        >
            <div id="youtube-player" style={{ display: 'none' }}></div>

            <div className="glass" style={{ padding: '15px', borderRadius: '20px', display: 'flex', flexDirection: 'column', gap: '10px', width: '150px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                        <Music size={16} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Música</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={musicVolume}
                        onChange={(e) => setMusicVolume(parseFloat(e.target.value))}
                        style={{ cursor: 'pointer', width: '100%' }}
                    />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)' }}>
                        <Volume2 size={16} />
                        <span style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>Voz</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={voiceVolume}
                        onChange={(e) => setVoiceVolume(parseFloat(e.target.value))}
                        style={{ cursor: 'pointer', width: '100%' }}
                    />
                </div>
            </div>

            <button
                onClick={toggleMusic}
                style={{
                    background: 'var(--primary)',
                    color: 'white',
                    border: 'none',
                    width: '64px',
                    height: '64px',
                    borderRadius: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 16px rgba(255, 107, 107, 0.3)',
                    transition: 'transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                }}
                onMouseDown={(e) => e.currentTarget.style.transform = 'scale(0.9)'}
                onMouseUp={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
                {isPlaying ? <Volume2 size={32} /> : <Music size={32} />}
            </button>
        </div>
    );
}

const MonkeySection = () => (
    <section id="monos" style={{ textAlign: 'center', padding: '100px 0', background: 'linear-gradient(rgba(254, 202, 87, 0.1), transparent)' }}>
        <div className="container">
            <h2 style={{ fontSize: '3rem', marginBottom: '3rem' }}>El <span className="gradient-text">Clan de los Monos</span></h2>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <div className="glass animate-fade-in" style={{ padding: '1.5rem', borderRadius: '24px', maxWidth: '400px' }}>
                    <img src={monoPuroImg} alt="Mono Puro" style={{ width: '100%', borderRadius: '16px', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>El General</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Te vigila mientras intentas entender cómo funciona el ratón.</p>
                </div>
                <div className="glass animate-fade-in" style={{ padding: '1.5rem', borderRadius: '24px', maxWidth: '400px' }}>
                    <img src={monoImg} alt="Mono" style={{ width: '100%', borderRadius: '16px', marginBottom: '1rem' }} />
                    <h3 style={{ marginBottom: '0.5rem' }}>El Observador</h3>
                    <p style={{ color: 'var(--text-muted)' }}>Se ríe en silencio de tu falta de habilidades digitales.</p>
                </div>
            </div>
            <div style={{ marginTop: '3rem' }}>
                <p style={{ fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>"Incluso nosotros sabemos usar el mando de la tele mejor que tú".</p>
            </div>
        </div>
    </section>
)

function App() {
    const [showPhoto, setShowPhoto] = useState(false);
    const [musicVolume, setMusicVolume] = useState(0.5);
    const [voiceVolume, setVoiceVolume] = useState(1);

    return (
        <div>
            <Navbar />

            <Hero onAction={() => setShowPhoto(true)} />

            {showPhoto && (
                <div className="animate-fade-in" style={{
                    textAlign: 'center',
                    padding: '2rem',
                    background: 'rgba(255,255,255,0.9)',
                    margin: '2rem auto',
                    maxWidth: '600px',
                    borderRadius: '24px',
                    boxShadow: 'var(--shadow)'
                }}>
                    <img
                        src={grandmaImg}
                        alt="Abuela"
                        style={{ width: '100%', borderRadius: '16px', marginBottom: '1rem' }}
                    />
                    <button
                        onClick={() => setShowPhoto(false)}
                        style={{
                            background: 'var(--text-muted)',
                            color: 'white',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}
                    >
                        Cerrar foto
                    </button>
                </div>
            )}

            <Services />
            <DarkHumorGenerator volume={voiceVolume} />
            <FatHumorGenerator volume={voiceVolume} />
            <BaldHumorGenerator volume={voiceVolume} />
            <MonkeySection />
            <InsultGenerator />
            <BlindInsultGenerator volume={voiceVolume} />
            <Footer />
            <AudioControlPanel
                musicVolume={musicVolume}
                setMusicVolume={setMusicVolume}
                voiceVolume={voiceVolume}
                setVoiceVolume={setVoiceVolume}
            />
        </div>
    )
}

export default App
