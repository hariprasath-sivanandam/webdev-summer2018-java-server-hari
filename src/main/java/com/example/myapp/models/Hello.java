package com.example.myapp.models;

import javax.persistence.*;
@Entity //annotation to state that this class is mapped to a table
public class Hello {
	@Id //Specifies the primary key of an entity
    @GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
    private String message;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}


}
