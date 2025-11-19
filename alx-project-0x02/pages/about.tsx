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
                    <Button title="Small - rounded-sm" size="small" shape="rounded-sm" />
                    <Button title="Small - rounded-md" size="small" shape="rounded-md" />
                    <Button title="Small - rounded-full" size="small" shape="rounded-full" />
                </div>

                {/* Medium buttons */}
                <div className="flex gap-3">
                    <Button title="Medium - rounded-sm" size="medium" shape="rounded-sm" />
                    <Button title="Medium - rounded-md" size="medium" shape="rounded-md" />
                    <Button title="Medium - rounded-full" size="medium" shape="rounded-full" />
                </div>

                {/* Large buttons */}
                <div className="flex gap-3">
                    <Button title="Large - rounded-sm" size="large" shape="rounded-sm" />
                    <Button title="Large - rounded-md" size="large" shape="rounded-md" />
                    <Button title="Large - rounded-full" size="large" shape="rounded-full" />
                </div>
            </div>
        </div>
    )
}

export default About;
