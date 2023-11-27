'use client';

import SubscriptButtton from '@/components/subscript-button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { useProModalStore } from '@/stores/promodal-store';

type UpgradeProModalProps = {
  isProPlan?: boolean;
};

export function UpgradeProModal({ isProPlan }: UpgradeProModalProps) {
  const { isOpenProModal, onCloseProModal } = useProModalStore();

  return (
    <Dialog open={isOpenProModal}>
      <DialogContent showClose={false} onClose={onCloseProModal}>
        <SubscriptButtton isPro={isProPlan} />
      </DialogContent>
    </Dialog>
  );
}
