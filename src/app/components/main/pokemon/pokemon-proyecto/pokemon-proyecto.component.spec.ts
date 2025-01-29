import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonProyectoComponent } from './pokemon-proyecto.component';

describe('ListaTareasComponent', () => {
  let component: PokemonProyectoComponent;
  let fixture: ComponentFixture<PokemonProyectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonProyectoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokemonProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
