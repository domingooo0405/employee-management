package com.accenture.web.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "items")
public class Item {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	@Column(name = "name")
	private String name;
	@Column(name = "original_price")
	private double originalPrice;
	@Column(name = "is_discounted")
	private boolean isDiscounted;
	@Column(name="discount_percentage")
	private double discountPercentage;
	@Column(name="discounted_price")
	private double discountedPrice;
	@Column(name="total_bill")
	private double totalBill;

	public Item() {
	}

	public Item(String name, double originalPrice, boolean isDiscounted, double discountPercentage,
			double discountedPrice, double totalBill) {
		super();
		this.name = name;
		this.originalPrice = originalPrice;
		this.isDiscounted = isDiscounted;
		this.discountPercentage = discountPercentage;
		this.discountedPrice = discountedPrice;
		this.totalBill = totalBill;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getOriginalPrice() {
		return originalPrice;
	}

	public void setOriginalPrice(double originalPrice) {
		this.originalPrice = originalPrice;
	}

	public boolean isDiscounted() {
		return isDiscounted;
	}

	public void setDiscounted(boolean isDiscounted) {
		this.isDiscounted = isDiscounted;
	}

	public double getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(double discountPercentage) {
		this.discountPercentage = discountPercentage;
	}

	public double getDiscountedPrice() {
		return discountedPrice;
	}

	public void setDiscountedPrice(double discountedPrice) {
		this.discountedPrice = discountedPrice;
	}

	public double getTotalBill() {
		return totalBill;
	}

	public void setTotalBill(double totalBill) {
		this.totalBill = totalBill;
	}


}
