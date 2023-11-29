'use client';

import { ToolsNavigation } from '@/components/dashboard';
import { useRef } from 'react';

const messages = [1];

function ConversationPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="h-full relative flex flex-col justify-between">
      <div ref={containerRef} className="overflow-y-auto space-y-10 scroll-smooth h-[calc(100vh-180px)]">
        {messages.length > 0 ? <div></div> : <ToolsNavigation title="Conversation" />}
      </div>
    </div>
  );
}

export default ConversationPage;
