import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        sender: "User",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMessage]);
      setInputValue("");
    }
  };

  return (
    <div className="flex flex-col h-full max-h-screen">
      <ScrollArea className="flex-1 p-4">
        {messages.map((message) => (
          <Card key={message.id} className={`mb-2 ${message.sender === "User" ? "ml-auto" : "mr-auto"}`}>
            <CardContent>
              <div className="text-sm text-muted-foreground">{message.sender}</div>
              <div>{message.text}</div>
              <div className="text-xs text-muted-foreground">{message.timestamp}</div>
            </CardContent>
          </Card>
        ))}
      </ScrollArea>
      <div className="flex p-4 border-t">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type a message..."
          className="flex-1 mr-2"
        />
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
    
