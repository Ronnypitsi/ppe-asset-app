import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  submitContact(): void {
    if (this.contactForm.valid) {
      const { name, email, message } = this.contactForm.value;
      // Replace with actual contact service call
      console.log('Contact submitted:', { name, email, message });
      alert('Your message has been sent!');
      this.contactForm.reset();
    }
  }

}
