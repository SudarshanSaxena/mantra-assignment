import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  questions = [
    {
      question: "Who invented C++?",
      answer: {
        value: 'bjarne',
        valueText: 'Bjarne Stroustrup'
      },
      options: [
        {
          value: 'james',
          valueText: 'James Gosling'
        },
        {
          value: 'bjarne',
          valueText: 'Bjarne Stroustrup'
        },
        {
          value: 'dennis',
          valueText: 'Dennis Ritche'
        },
        {
          value: 'steve',
          valueText: 'Steve Wozniak'
        }
      ]
    },

    {
      question: "Who invented C?",
      answer: {
        value: 'dennis',
        valueText: 'Bjarne Stroustrup'
      },
      options: [
        {
          value: 'james',
          valueText: 'James Gosling'
        },
        {
          value: 'bjarne',
          valueText: 'Bjarne Stroustrup'
        },
        {
          value: 'dennis',
          valueText: 'Dennis Ritche'
        },
        {
          value: 'steve',
          valueText: 'Steve Wozniak'
        }
      ]
    },

    {
      question: "Who invented Java?",
      answer: {
        value: 'james',
        valueText: 'James Gosling'
      },
      options: [
        {
          value: 'james',
          valueText: 'James Gosling'
        },
        {
          value: 'bjarne',
          valueText: 'Bjarne Stroustrup'
        },
        {
          value: 'dennis',
          valueText: 'Dennis Ritche'
        },
        {
          value: 'steve',
          valueText: 'Steve Wozniak'
        }
      ]
    },

    {
      question: "Who was the first Technical Lead in Apple?",
      answer: {
        value: 'steve',
        valueText: 'Steve Wozniak'
      },
      options: [
        {
          value: 'james',
          valueText: 'James Gosling'
        },
        {
          value: 'bjarne',
          valueText: 'Bjarne Stroustrup'
        },
        {
          value: 'dennis',
          valueText: 'Dennis Ritche'
        },
        {
          value: 'steve',
          valueText: 'Steve Wozniak'
        }
      ]
    },

    {
      question: "What's the latest version of Angular",
      answer: {
        value: 'angular10',
        valueText: 'Angular 10'
      },
      options: [
        {
          value: 'angular11',
          valueText: 'Angular 11'
        },
        {
          value: 'angular12',
          valueText: 'Angular 12'
        },
        {
          value: 'angular10',
          valueText: 'Angular 10'
        },
        {
          value: 'angular9',
          valueText: "Angular 9"
        }
      ]
    }
  ]
  constructor(private fb: FormBuilder) {

  }
  answer1 = false
  answer2 = false
  answer3 = false
  answer4 = false
  answer5 = false

  quizForm = this.fb.group({
    question1: ['', Validators.required],
    question2: ['', Validators.required],
    question3: ['', Validators.required],
    question4: ['', Validators.required],
    question5: ['', Validators.required]
  })

  ngOnInit(): void {
  }

  // onSubmit() {
  //   console.log(this.quizForm.value);
  //   if (this.quizForm.value.question1 != this.questions[0].answer.value) {
  //     this.answer1 = false;
  //   }
  // }

  clear() {
    this.quizForm.reset();
    this.answer1 = false;
    this.answer2 = false;
    this.answer3 = false;
    this.answer4 = false;
    this.answer5 = false;
  }

  submitHandler() {
    if (this.quizForm.value.question1 != this.questions[0].answer.value) {
      this.answer1 = false;
    } else { this.answer1 = true; }

    if (this.quizForm.value.question2 != this.questions[1].answer.value) {
      this.answer2 = false;
    } else this.answer2 = true;

    if (this.quizForm.value.question3 != this.questions[2].answer.value) {
      this.answer3 = false;
    } else this.answer3 = true;

    if (this.quizForm.value.question4 != this.questions[3].answer.value) {
      this.answer4 = false;
    } else this.answer4 = true;

    if (this.quizForm.value.question5 != this.questions[4].answer.value) {
      this.answer5 = false;
    } else this.answer5 = true;
  }

}
