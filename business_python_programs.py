# ==========================================
# NAME: HAMNA JAMIL
# TOPIC: Basic Business Python Programs
# ==========================================


# ========== Program 1: Discount Calculator ==========
# This program calculates the final price of a product after applying a discount.
# It takes the original price and discount percentage, then shows the final amount.

price = 100
discount = 20  # 20% off
final_price = price - (price * discount / 100)
print(f"Original: ${price}")
print(f"Final Price: ${final_price}")


print("\n")


# ========== Program 2: Monthly Salary Calculator ==========
# This program calculates an employee's monthly salary based on their hourly rate.
# It multiplies hourly rate by hours worked per week and weeks in a month.

hourly_rate = 25
hours_per_week = 40
weeks_per_month = 4
monthly_salary = hourly_rate * hours_per_week * weeks_per_month
print(f"Monthly Salary: ${monthly_salary}")


print("\n")


# ========== Program 3: Profit Calculator ==========
# This program calculates business profit by subtracting total costs from revenue.
# It shows how much profit the business has made.

revenue = 5000
cost = 3000
profit = revenue - cost
print(f"Profit: ${profit}")