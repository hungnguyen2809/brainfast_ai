import { axiosClient } from '@/axiosClient';
import { cn } from '@/lib/utils';
import { Sparkles } from 'lucide-react';
import { useState } from 'react';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

type SubscriptButttonProps = {
  isPro?: boolean;
  className?: string;
};

function SubscriptButtton({ isPro, className }: SubscriptButttonProps) {
  const { toast } = useToast();

  const [loading, setLoading] = useState(false);

  const handleSubcribe = async () => {
    try {
      setLoading(true);
      await axiosClient.supcriptStripe();
    } catch (error) {
      toast({ variant: 'destructive', description: 'Something went wrong. Please try again' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <Button
        size="lg"
        variant="outline"
        disabled={loading}
        onClick={handleSubcribe}
        className={cn('text-white w-full font-semibold border-none gradient-btn', 'hover:text-white')}
      >
        <span>{isPro ? 'Manage Subcription' : 'Upgrade to Pro'}</span>
        <Sparkles />
      </Button>
    </div>
  );
}

export default SubscriptButtton;
