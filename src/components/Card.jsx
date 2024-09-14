import { motion } from 'framer-motion'

export default function AboutCard({ title, description, color, image }) {
    
    const Card = ({ children, className }) => (
        <div className={`bg-white rounded-lg shadow-md overflow-hidden ${className}`}>
            {children}
        </div>
    );

    const CardHeader = ({ children }) => (
        <div className="px-6 py-4">{children}</div>
    );

    const CardImage = ({ children }) => (
        <img src={children} alt="" className='' />
    );

    const CardTitle = ({ children }) => (
        <h3 className="text-lg text-black font-semibold mb-2">{children}</h3>
    );

    const CardDescription = ({ children }) => (
        <p className="text-2xl font-[900] text-gray-600">{children}</p>
    );

    const FeatureCard = ({ title, description, color, image }) => (
        <motion.div
            whileHover={{ scale: 1.015 }}
            whileTap={{ scale: 0.95 }}
            className="w-full h-[20vw]"
        >

                <Card className={`${color} text-white hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <div className='grid grid-cols-2'>
                        <CardImage>{image}</CardImage>
                        <CardDescription>{description}</CardDescription>
                    </div>
                    </CardHeader>
                </Card>

        </motion.div>
    );

    return (
        <>
            <FeatureCard title={title} description={description} color={color} image={image} />
        </>
    )
}