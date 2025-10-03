import { Injectable, InjectionToken, inject } from '@angular/core';
import emailjs from '@emailjs/browser';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContactForm } from '../../shared/models/contact';
import { environment } from '../../../environments/environment';

export interface EmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}

export const EMAILJS_CONFIG = new InjectionToken<EmailJsConfig>('EMAILJS_CONFIG', {
  factory: () => ({
    serviceId: environment.EMAILJS_SERVICE_ID,
    templateId: environment.EMAILJS_TEMPLATE_ID,
    publicKey: environment.EMAILJS_PUBLIC_KEY,
  }),
});

@Injectable({ providedIn: 'root' })
export class EmailService {
  private snack = inject(MatSnackBar);
  private cfg = inject(EMAILJS_CONFIG);

  async send(form: ContactForm) {
    if (!this.cfg.serviceId || !this.cfg.templateId || !this.cfg.publicKey) {
      console.error('[EmailJS] Missing keys in environment');
      this.snack.open('Não foi possível enviar agora. Tente novamente mais tarde.', 'Fechar', {
        duration: 4000,
      });
      throw new Error('Missing EmailJS keys');
    }

    try {
      const res = await emailjs.send(this.cfg.serviceId, this.cfg.templateId, form, {
        publicKey: this.cfg.publicKey,
      });
      this.snack.open('Mensagem enviada com sucesso! Obrigado pelo contato.', 'Fechar', {
        duration: 4000,
      });
      return res;
    } catch (err) {
      console.error('[EmailJS] send error', err);
      this.snack.open('Ocorreu um erro ao enviar. Por favor, tente novamente.', 'Fechar', {
        duration: 5000,
      });
      throw err;
    }
  }
}
