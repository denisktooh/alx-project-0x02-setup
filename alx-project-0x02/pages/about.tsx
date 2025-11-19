import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
    return(
        <div className="flex flex-col h-screen">
            <Header />
            <h1>This is About Page</h1>
            
            <div className="mt-8 flex flex-col gap-4">
                {/* Small buttons */}
                <div className="flex gap-3">
                    <Button title="Small - rounded-sm" styles="text-sm rounded-sm px-2 py-1" />
                    <Button title="Small - rounded-md" styles="text-sm rounded-md px-2 py-1" />
                    <Button title="Small - rounded-lg" styles="text-sm rounded-lg px-2 py-1" />
                    <Button title="Small - rounded-full" styles="text-sm rounded-full px-2 py-1" />
                </div>

                {/* Medium buttons */}
                <div className="flex gap-3">
                    <Button title="Medium - rounded-sm" styles="text-base rounded-sm px-3 py-2" />
                    <Button title="Medium - rounded-md" styles="text-base rounded-md px-3 py-2" />
                    <Button title="Medium - rounded-lg" styles="text-base rounded-lg px-3 py-2" />
                    <Button title="Medium - rounded-full" styles="text-base rounded-full px-3 py-2" />
                </div>

                {/* Large buttons */}
                <div className="flex gap-3">
                    <Button title="Large - rounded-sm" styles="text-lg rounded-sm px-4 py-3" />
                    <Button title="Large - rounded-md" styles="text-lg rounded-md px-4 py-3" />
                    <Button title="Large - rounded-lg" styles="text-lg rounded-lg px-4 py-3" />
                    <Button title="Large - rounded-full" styles="text-lg rounded-full px-4 py-3" />
                </div>
            </div>
        </div>
    )
}

export default About;
