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
        "Si ves a una abuela en un paso de cebra, recuerda: los puntos del carné se pierden, pero los puntos de estilo son para siempre.",
        "Mi coche tiene un imán para las dentaduras postizas; cada vez que paso por un asilo, el parachoques vuelve lleno.",
        "¿Cómo se llama una vieja que ha sido atropellada por una apisonadora? Una alfombra de bienvenida muy arrugada.",
        "Atropellar a un anciano es como jugar a los bolos: si cae el resto de la excursión del IMSERSO, ¡pleno!"
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
        speak(randomJoke);
    };

    return (
        <section id="humor" style={{ textAlign: 'center', padding: '60px 0', background: 'rgba(45, 52, 54, 0.05)' }}>
            <div className="container">
                <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Humor de Ultratumba</h2>
                <div className="glass" style={{ padding: '3rem', borderRadius: '30px', maxWidth: '700px', margin: '0 auto' }}>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                        ¿Te gusta el humor tan negro como el futuro de tu pensión? Dale al botón.
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

const AudioControlPanel = ({ musicVolume, setMusicVolume, voiceVolume, setVoiceVolume }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = musicVolume;
        }
    }, [musicVolume]);

    const toggleMusic = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
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
            <audio
                ref={audioRef}
                loop
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
            />

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
            <MonkeySection />
            <InsultGenerator />
            <BlindInsultGenerator volume={voiceVolume} />
            <DarkHumorGenerator volume={voiceVolume} />
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
