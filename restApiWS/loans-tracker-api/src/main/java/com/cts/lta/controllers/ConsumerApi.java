package com.cts.lta.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.lta.entity.Consumer;
import com.cts.lta.exceptions.DuplicateEntryException;
import com.cts.lta.exceptions.NotFoundException;
import com.cts.lta.service.ConsumerService;

@RestController
@CrossOrigin
@RequestMapping("/consumers")
public class ConsumerApi {

	@Autowired
	private ConsumerService consumerService;
	
	@GetMapping
	public ResponseEntity<List<Consumer>> getAll(){
		return ResponseEntity.ok(consumerService.getAll());
	}
	
	@GetMapping("/{cid}")
	public ResponseEntity<Consumer> getById(@PathVariable("cid") long consumerId){
		return consumerService.exists(consumerId) ? 
				ResponseEntity.ok(consumerService.getById(consumerId)) :
					ResponseEntity.notFound().build();
	}
	
	@PostMapping
	public ResponseEntity<Consumer> create(@RequestBody Consumer consumer) throws DuplicateEntryException{
		if(consumer.getConsumerId()!=null && consumerService.exists(consumer.getConsumerId())) {
			throw new DuplicateEntryException("Consumer already exists");
		}
		
		return new ResponseEntity<>(consumerService.save(consumer),HttpStatus.CREATED);
	}
	
	@PutMapping
	public ResponseEntity<Consumer> update(@RequestBody Consumer consumer) throws NotFoundException{
		if(!consumerService.exists(consumer.getConsumerId())) {
			throw new NotFoundException("Consumer not foudn to update");
		}
		
		return new ResponseEntity<>(consumerService.save(consumer),HttpStatus.ACCEPTED);
	}
	
	@DeleteMapping("/{cid}")
	public ResponseEntity<Void> deleteById(@PathVariable("cid") long consumerId) throws NotFoundException{
		if(!consumerService.exists(consumerId)) {
			throw new NotFoundException("Consumer not foudn to delete");
		}
		
		consumerService.deleteById(consumerId);
		return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
