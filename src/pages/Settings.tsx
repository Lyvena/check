import React from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Settings as SettingsIcon, Key } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Settings = () => {
  const { toast } = useToast();
  const [apiKey, setApiKey] = React.useState('');

  const handleSaveApiKey = () => {
    if (apiKey.startsWith('sk-')) {
      localStorage.setItem('openai_api_key', apiKey);
      toast({
        title: "Success!",
        description: "Your OpenAI API key has been saved.",
      });
    } else {
      toast({
        title: "Invalid API Key",
        description: "Please enter a valid OpenAI API key starting with 'sk-'",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="flex flex-row items-center gap-4">
              <SettingsIcon className="h-8 w-8 text-blue-600" />
              <div>
                <CardTitle>AI Settings</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Key className="h-6 w-6 text-blue-600" />
                  <div className="flex-grow">
                    <h3 className="font-semibold mb-2">OpenAI API Key</h3>
                    <div className="flex gap-2">
                      <Input
                        type="password"
                        placeholder="Enter your OpenAI API key"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="flex-grow"
                      />
                      <Button onClick={handleSaveApiKey}>Save</Button>
                    </div>
                    <p className="text-sm text-gray-500 mt-2">
                      Your API key is stored locally and never sent to our servers.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Settings;