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
        <p className="text-sm text-gray-600">{children}</p>
    );

    const FeatureCard = ({ title, description, color, image }) => (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
        >

                <Card className={`${color} text-white hover:shadow-lg transition-shadow`}>
                    <CardHeader>
                        <CardTitle>{title}</CardTitle>
                        <CardImage>{image}</CardImage>
                        <CardDescription className="text-gray-200">{description}</CardDescription>
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