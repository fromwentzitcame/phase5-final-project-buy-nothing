class CreateSubcomments < ActiveRecord::Migration[6.1]
  def change
    create_table :subcomments do |t|
      t.text :text
      t.integer :likes
      t.belongs_to :user
      t.belongs_to :comment

      t.timestamps
    end
  end
end
