import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-200">
            <button
                className="flex justify-between items-center w-full py-4 px-6 text-left"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="font-medium">{title}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            {isOpen && <div className="p-6">{children}</div>}
        </div>
    );
};

const Accordion = ({ items }) => {
    return (
        <div className="border border-gray-200 rounded-md">
            {items.map((item, index) => (
                <AccordionItem key={index} title={item.title}>
                    {item.content}
                </AccordionItem>
            ))}
        </div>
    );
};

const App = () => {
    const reductionItems = [
        {
            title: 'Long-term strategies',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Under the Paris Agreement, countries are invited to communicate long-term strategies (LTS) for emissions reductions that envision a whole-of-society transformation over several decades, usually up to 2050. LTS documents align to the long-term objectives of limiting global warming and achieving net-zero by 2050.</li>
                    <li>Long-term strategies provide a long-term vision that gives coherence and direction to shorter-term national climate pledges like the NDCs. They guide countries to pursue low-carbon development and prevent fossil fuel-intensive investments, demonstrating the socioeconomic benefits of the green transition. They boost innovation and can help drive investment in low-carbon solutions and sustainable infrastructure. And they help facilitate and promote just and equitable transitions for the people who are most affected, making sure that climate solutions are fair and inclusive.</li>
                    <li>When countries officially communicate their LTS to the UNFCCC it is called a Long-Term Low Emission Development Strategy (LT-LEDS).</li>
                </ul>
            ),
        },
        {
            title: 'Mitigation',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Reducing or preventing greenhouse gas emissions can be achieved by transitioning to renewable energy sources like wind and solar, using energy more efficiently, adopting low carbon or carbon-free transportation modalities, promoting sustainable agriculture and land use, and changing production and consumption models and diet behaviors.</li>
                    <li>In order for mitigation actions to be successful, it is crucial that countries develop supportive environments through legislation, policies, and investments.</li>
                </ul>
            ),
        },
        {
            title: 'Net Zero',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Reaching net zero requires us to ensure that carbon dioxide emissions from human activity are balanced by human efforts to remove carbon dioxide emissions (for example, by creating carbon sinks to absorb carbon dioxide) - thereby stopping further increases in the concentration of greenhouse gases in the atmosphere.</li>
                    <li>Transitioning to net zero requires a complete transformation of our energy, transportation, and production and consumption systems. This is necessary to avert the worst consequences of climate change.</li>
                </ul>
            ),
        },
        {
            title: 'Reduction of Carbon footprint',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Measuring a person's or an organization's carbon footprint entails looking at both the direct emissions resulting from the burning of fossil fuels for energy production, heating, and land and air travel, and indirect emissions resulting from the production and disposal of all food, manufactured goods, and services they consume.</li>
                    <li>Carbon footprints can be reduced by shifting to low-carbon energy sources like wind and solar, improving energy efficiency, strengthening industry policies and regulations, changing purchasing and travel habits, and reducing meat consumption and food waste.</li>
                </ul>
            ),
        },
        {
            title: 'Certification for Carbon Markets',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Carbon markets are trading schemes that create financial incentives for activities that reduce or remove greenhouse gas emissions. In these schemes, emissions are quantified into carbon credits that can be bought and sold. One tradable carbon credit equals one tonne of carbon dioxide, or the equivalent amount of a different greenhouse gas reduced, sequestered or avoided.</li>
                    <li>The programmes to reduce or remove emissions are certified by a third party and registered under a carbon market standard. Consultus Global is involved in Carbon market certification</li>
                    <li>For carbon markets to be successful, countries must work together to secure robust carbon accounting, ensure transparency for carbon market transactions, implement safeguards against human rights abuses and other adverse societal impacts, and combat greenwashing and the misrepresentation of carbon-neutral products and services.</li>
                </ul>
            ),
        },
        {
            title: 'Decarbonization',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Decarbonization entails changing many, if not all, aspects of the economy, from how energy is generated, to how goods and services are produced and delivered, to how buildings are built and how lands are managed.</li>
                    <li>Meaningful decarbonization requires substantial investments in lowcarbon infrastructure and transportation, renewable energy sources, circular economy and resource efficiency, and land and soil restoration. It also requires a rethinking of current economic models that are focused on growth at all costs.</li>
                </ul>
            ),
        },
    ];

    const climateChangeItems = [
        {
            title: 'Adaptation',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>As Consultus Global, we focused on the measures on the climate change adaptation that refers to actions that help reduce vulnerability to the current or expected impacts of climate change like weather extremes and natural disasters, sea-level rise, biodiversity loss, or food and water insecurity.</li>
                    <li>Many adaptation measures need to happen at the local level, so rural communities and cities have a big role to play. Such measures include planting crop varieties that are more resistant to drought and practicing regenerative agriculture, improving water storage and use, managing land to reduce wildfire risks, and building stronger defenses against extreme weather like floods and heat waves.</li>
                    <li>Besides that, we have been involved in the projects for the large-scale measures such as strengthening or relocating infrastructure from coastal areas affected by sea-level rise, building infrastructure able to withstand more extreme weather conditions.</li>
                </ul>
            ),
        },
        {
            title: 'Resilience',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>To best safeguard societal wellbeing, economic activity, and the environment, people, communities, and governments need to be equipped to deal with the unavoidable impacts of climate change. Climate resilience is the capacity of a community or environment to anticipate and manage climate impacts, minimize their damage, and recover and transform as needed after the initial shock.</li>
                    <li>In this sense, within the scope of "Integrated Urban Water Management Projects" in which Consultus Global partners have been involved in the past, strategies and actions have been developed to make cities resilient to climate change.</li>
                </ul>
            ),
        },
        {
            title: 'Renewable Energy',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Protected areas, such as national parks, biosphere reserves, and marine protected areas, play a crucial role in preserving biodiversity and conserving terrestrial and aquatic ecosystems. ConsultUS is committed to improving conservation areas through the implementation of sound and sustainable management techniques.</li>
                </ul>
            ),
        },
        {
            title: 'Reduction of Greenhouse Gas Emissions',
            content: (
                <div>
                    <ul className="list-disc pl-5 space-y-2 mb-4">
                        <li>Since the industrial era began, human activities have led to the release of dangerous levels of greenhouse gases, causing global warming and climate change.</li>
                        <li>Carbon dioxide is the main greenhouse gas emitted as a result of human activities, especially the burning of fossil fuels, deforestation and land use change.</li>
                        <li>Methane is another important greenhouse gas that is responsible for 25 percent of global warming. Methane is released during the extraction and transport of coal, gas, and oil, and by waste landfills and agricultural practices.</li>
                    </ul>
                    <p className="mb-4">Consultus Global targets the following reduction of GHG emissions projects:</p>
                    <Accordion items={reductionItems} />
                </div>
            ),
        },
    ];

    const mainItems = [
        {
            title: 'Climate Change',
            content: (
                <div>
                    <p className="mb-4">
                        Climate change is a significant driver of social inequality and a major threat to global security in the 21st century. Increasing weather extremes, rising sea levels, and the growing threat of environmental disasters are depriving more and more people of their livelihoods worldwide.
                    </p>
                    <p className="mb-4">
                        Therefore, reducing emissions and adapting to the unavoidable consequences of climate change are crucial for ConsultUS Global LLC.
                    </p>
                    <Accordion items={climateChangeItems} />
                </div>
            ),
        },
        {
            title: 'Biodiversity',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Protected areas, such as national parks, biosphere reserves, and marine protected areas, play a crucial role in preserving biodiversity and conserving terrestrial and aquatic ecosystems. ConsultUS is committed to improving conservation areas through the implementation of sound and sustainable management techniques.</li>
                </ul>
            ),
        },
        {
            title: 'Transition to Blue Economy',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>The world's oceans – their temperature, chemistry, currents, and life – drive global systems that make Earth habitable for humankind. Our rainwater, drinking water, weather, climate, coastlines, much of our food, medicines and even the oxygen in the air we breathe, are all provided and regulated by the seas. However, because of climate change, the health of our oceans is now at significant risk.</li>
                    <li>The "blue economy" concept seeks to promote economic development, social inclusion, and the preservation or improvement of livelihoods while at the same time ensuring environmental sustainability of the oceans and coastal areas.</li>
                    <li>Blue economy has diverse components, including established traditional ocean industries such as fisheries, tourism, and maritime transport, but also new and emerging activities, such as offshore renewable energy, aquaculture, seabed extractive activities, and marine biotechnology.</li>
                </ul>
            ),
        },
        {
            title: 'Transition to Circular Economy',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Circular economy refers to models of production and consumption that minimize waste and reduce pollution, promote sustainable uses of natural resources, and help regenerate nature.</li>
                    <li>Circular economy approaches are all around us. They can be employed in a number of different sectors from textiles to buildings and construction, and at various stages of a product's lifecycle, including design, manufacturing, distribution, and disposal.</li>
                    <li>Besides helping tackle the problem of pollution, circular economy approaches can play a critical role in solving other complex challenges such as climate change and biodiversity loss. They can help countries accelerate their transition to more resilient and lowercarbon economies while also creating new green jobs.</li>
                    <li>Currently, only 7.2 percent of used materials are cycled back into our economies after use. This has a significant burden on the environment and contributes to the climate, biodiversity, and pollution crises. As a result, we currently need about 1.7 Earths to deliver on all the world's resource demands.</li>
                </ul>
            ),
        },
        {
            title: 'Gender Equality',
            content: (
                <ul className="list-disc pl-5 space-y-2">
                    <li>Gender equality is a cornerstone of human rights, social justice, and sustainable development.</li>
                    <li>Gender equality is not only a matter of social justice but also a catalyst for economic growth and prosperity.</li>
                </ul>
            ),
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <Accordion items={mainItems} />
        </div>
    );
};

export default App;