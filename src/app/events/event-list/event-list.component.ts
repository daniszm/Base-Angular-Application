import { EventsService } from './../events.service';
import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/interfaces/event.model';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit {
  public availableEvents: Event[] = [{
    name: "Healthy Escape Room",
    shortDescription: "You’ve only 20 minutes to solve crime enigma and escape the room!",
    longDescription: "An investigative team of 2-5 people enters the room and has to discover the identity of a mysterious person who may have been involved in the death of doctor Hofenweizeblock, a famous nutrition specialist. Solving the crime enigmas will not be an easy task, as there is a lot of puzzles waiting for the investigation team!",
    location: "Axis",
  },
  {
    name: "Forest in a jar",
    shortDescription: "Practical workshop with elements of theory, conducted by a passionate florist.",
    longDescription: "An investigative team of 2-5 people enters the room and has to discover the identity of a mysterious person who may have been involved in the death of doctor Hofenweizeblock, a famous nutrition specialist. Solving the crime enigmas will not be an easy task, as there is a lot of puzzles waiting for the investigation team!",
    location: "Axis",
  }
  ,
  {
    name: "Chill out!",
    shortDescription: "Practical workshop with elements of theory, conducted by a physiotherapist. ",
    longDescription: "An investigative team of 2-5 people enters the room and has to discover the identity of a mysterious person who may have been involved in the death of doctor Hofenweizeblock, a famous nutrition specialist. Solving the crime enigmas will not be an easy task, as there is a lot of puzzles waiting for the investigation team!",
    location: "Axis",
  }
  ,
  {
    name: "Chair massage",
    shortDescription: "Feel refreshed with a 10-minute-long massage in the office.",
    longDescription: "An investigative team of 2-5 people enters the room and has to discover the identity of a mysterious person who may have been involved in the death of doctor Hofenweizeblock, a famous nutrition specialist. Solving the crime enigmas will not be an easy task, as there is a lot of puzzles waiting for the investigation team!",
    location: "Axis",
  }];

  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    const test = this.eventsService.getAvailableEvents();
    }
  }

