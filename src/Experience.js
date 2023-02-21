import { ContactShadows , Environment, Float, PresentationControls, Html, Sparkles } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import { useControls } from 'leva'
import { useRef } from 'react'


export default function Experience()
{

    // const controls = useControls({
    //     position: {value: {x: 0.17, y:1.33}}
    // })

    const torus1 = useRef()
    const torus2 = useRef()
    const torus3 = useRef()

    useFrame((state,delta) => {
        torus1.current.rotation.y = state.clock.elapsedTime / 10
        torus2.current.rotation.y = -state.clock.elapsedTime / 10
        torus3.current.rotation.y = state.clock.elapsedTime / 10
    })

    return <>

        <color attach="background" args={['#52796f']}/>

        <PresentationControls 
            global 
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 8, Math.PI / 8]} // Vertical limits
            azimuth={[-Math.PI / 8, Math.PI / 8]} // Horiz limit
            snap={true} // Can also be another spring config
            speed={0.2}
            config={{ mass: 1, tension: 100, friction: 26 }} // Spring config
        >
            <Environment preset="city"/>
        
                <Float>
                    <Html occlude="blending" transform distanceFactor={1.3} position={[0, 0, 0.252]} rotation-x={0}>
                            {/* <iframe src="http://fullstackdigital.io" className="htmlScreen"></iframe> */}
                            
                            <section className="htmlScreen">
                                <div className="profile">
                                </div>
                                <div className="info">
                                    <h1>Anton Plauche</h1>
                                    <p>Developer / UX Designer</p>
                                </div>
                                <div className="links">
                                    <a href="">Website</a>
                                    <a href="">Twitter</a>
                                    <a href="">Github</a>
                                    <a href="">LinkedIn</a>
                                </div>
                            </section>
                        </Html>
                </Float>
            

            <Float>
                <mesh ref={torus1} position={[-0.5, 1, -2]}>
                    <torusKnotGeometry args={[1, 0.4, 128, 64]} />
                    <meshStandardMaterial roughness={0} metalness={0} color={'#84a98c'}/>
                </mesh>
            </Float>
            <Float>
                <mesh ref={torus2} rotation-y={Math.PI / 2} position={[2.2, 0.4, 1.6]}>
                    <torusKnotGeometry args={[1, 0.4, 128, 64]} />
                    <meshStandardMaterial roughness={0} metalness={0} color={'#84a98c'}/>
                </mesh>
            </Float>
            <Float>
                <mesh ref={torus3} scale={0.75} position={[-2, 1.6, 1.5]}>
                    <torusKnotGeometry args={[1, 0.4, 128, 64]} />
                    <meshStandardMaterial roughness={0} metalness={0} color={'#84a98c'}/>
                </mesh>
            </Float>


            <Float>
                <mesh position={[2, 0.3, -2]}>
                    <sphereGeometry args={[0.3, 32,32]} />
                    <meshStandardMaterial roughness={0} metalness={0} color={'#84a98c'}/>
                </mesh>
            </Float>
            <Float>
                <mesh position={[-1.4, 0.3, 2]}>
                    <sphereGeometry args={[0.18, 32,32]} />
                    <meshStandardMaterial roughness={0} metalness={0} color={'#84a98c'}/>
                </mesh>
            </Float>
            <Float>
                <mesh position={[-1, -0.5, 2]}>
                    <sphereGeometry args={[0.12, 32,32]} />
                    <meshStandardMaterial roughness={0} metalness={0} color={'#84a98c'}/>
                </mesh>
            </Float>

            <Float>
                <mesh position={[-2, -1, 1]}>
                    <sphereGeometry args={[0.25, 32,32]} />
                    <meshStandardMaterial roughness={0} metalness={0} color={'#84a98c'}/>
                </mesh>
            </Float>

        </PresentationControls>


        <Sparkles
            position={[0,9,-10]}
            count={200}
            size={10}
            scale={20}
            speed={0.2}
            color="#cad2c5"
        />

        <ContactShadows  position-y={-2} opacity={0.5} blur={1.4}/>


    </>
}