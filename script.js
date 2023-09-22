const app = Vue.createApp({
    data() {
      return {
        name: 'WASIF FOUZAN',
        intro: 'Hello,everyone I am a first year university student and a  web-developer. Till now I have learned different things and moving forward to learn more:',
        skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Responsive Design'],
        projects: [
          {
            title: 'TASK 1',
            description: 'In this task.This was 1 st task of my unit, ',
            link: 'https://github.com/fouzan98/code/blob/main/new.html'
          },
          {
            title: 'TASK 2',
            description: 'In this task i have created a ATM Machine and created a schedule plan for students.',
            link:': https://github.com/fouzan98/2.1C'
          },
          {
            title:'TASK 3',
            description: 'This was my 3 rd task',
            link: 'https://github.com/fouzan98/credit_task'
          },
          {
            title:'TASK 4',
            description: 'This was my fourth task.',
            link: 'https://github.com/fouzan98/2.3c'
          },
          {
            title:'Drop a Message for me',
            description:'For any kind of query. Please drop a message to me through this link.',
            link:'./form.html'
          }
          
        ],
        email: 'mohdwasiffouzan@gmail.com',
        INSTAGRAM: 'wasif_fouzan',
        phone : '+61-4228xxxxx'
      };
    },
    template: `
      <div>
        <div class="header">
          <h1>My Resume</h1>
        </div>
        <div class="container">
          <div class="intro">
            <h2>{{ name }}</h2>
            <p>{{ intro }}</p>
          </div>
          <div class="skills">
            <div class="skill" v-for="skill in skills">{{ skill }}</div>
          </div>
          <div v-for="project in projects" class="project">
            <h2>{{ project.title }}</h2>
            <p>{{ project.description }}</p>
           <button> <a :href="project.link">click here</a></button>
          </div>
          <div class="contact">
            <p>Contact me at:</p>
            <p>Email: {{ email }}</a></p>
            <p>Instagram:{{ INSTAGRAM }}</a></p>
            <p>Phone:{{ phone }}</a></p>
          </div>
        </div>
      </div>
    `
  });
  
  app.mount('#app')